import defaultPricesCsv from '~/data/prices.csv?raw'

/**
 * Цены берутся из Google Таблицы (одна строка — одна услуга).
 * Колонки (порядок не важен, ищутся по названию):
 *   услуга | цена (₽) | базовая длина (см) | шаг за 10 см (₽) | порог (см) | шаг после порога (₽) | скидка в комплексе (%) | в прайсе
 *
 * Если таблица недоступна или в ней нет нужных колонок — используется data/prices.csv.
 */
export interface PriceRow {
  /** Название услуги, как в таблице */
  name: string
  /** Цена за базовую длину */
  price: number
  /** До какой длины действует базовая цена, см */
  baseLength: number
  /** Доплата за каждые следующие 10 см. 0 — цена не зависит от длины */
  step: number
  /** Длина, после которой действует другой шаг, см */
  threshold: number | null
  /** Доплата за каждые 10 см после порога */
  stepAfter: number | null
  /** Скидка на услугу, если она добавлена к другой процедуре, % */
  comboDiscount: number
  /** Показывать карточкой в разделе «Услуги и цены» */
  inList: boolean
}

export const LENGTH_MIN = 30
export const LENGTH_MAX = 110
export const LENGTH_STEP = 10

/** Разбор CSV с поддержкой кавычек */
export const parseCsv = (text: string): string[][] => {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let quoted = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"'
        i++
      } else if (ch === '"') {
        quoted = false
      } else {
        cell += ch
      }
    } else if (ch === '"') {
      quoted = true
    } else if (ch === ',') {
      row.push(cell)
      cell = ''
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++
      row.push(cell)
      rows.push(row)
      row = []
      cell = ''
    } else {
      cell += ch
    }
  }
  if (cell || row.length) {
    row.push(cell)
    rows.push(row)
  }
  return rows
}

const normalizeHeader = (s: string) =>
  s.toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я0-9]+/g, ' ').trim()

const toNumber = (raw?: string): number | null => {
  if (!raw) return null
  const s = raw.replace(/\s|₽|руб\.?/gi, '').replace(',', '.')
  if (!s) return null
  const n = parseFloat(s.replace('%', ''))
  return Number.isFinite(n) ? n : null
}

const toPercent = (raw?: string): number => {
  const n = toNumber(raw)
  if (n === null || n <= 0) return 0
  // «0,3» без знака % — это 30 %
  return !raw?.includes('%') && n < 1 ? n * 100 : n
}

export const parsePriceSheet = (text: string): PriceRow[] => {
  const [head = [], ...body] = parseCsv(text)
  const header = head.map(normalizeHeader)
  const col = (test: (h: string) => boolean) => header.findIndex(test)

  const iName = col(h => h.includes('услуг') || h.includes('наимен'))
  const iPrice = col(h => h.startsWith('цена') && !h.includes('макс') && !h.includes(' до'))
  const iBase = col(h => h.includes('базов'))
  const iStep = col(h => h.includes('шаг') && !h.includes('после'))
  const iThreshold = col(h => h.includes('порог') && !h.includes('шаг'))
  const iStepAfter = col(h => h.includes('шаг') && h.includes('после'))
  const iDiscount = col(h => h.includes('скидк'))
  const iList = col(h => h.includes('прайс'))

  if (iName < 0 || iPrice < 0 || iBase < 0) {
    throw new Error('В таблице цен нет колонок «услуга», «цена» и «базовая длина»')
  }

  const at = (cells: string[], i: number) => (i >= 0 ? cells[i]?.trim() : undefined)

  return body.flatMap((cells) => {
    const name = at(cells, iName)
    const price = toNumber(at(cells, iPrice))
    if (!name || price === null) return []
    return [{
      name,
      price,
      baseLength: toNumber(at(cells, iBase)) ?? LENGTH_MIN,
      step: toNumber(at(cells, iStep)) ?? 0,
      threshold: toNumber(at(cells, iThreshold)),
      stepAfter: toNumber(at(cells, iStepAfter)),
      comboDiscount: toPercent(at(cells, iDiscount)),
      inList: !/^(нет|no|0|-)$/i.test(at(cells, iList) ?? ''),
    }]
  })
}

/** Стоимость услуги для длины волос (см) */
export const priceAt = (row: PriceRow, length: number): number => {
  let total = row.price
  if (!row.step) return total
  for (let l = row.baseLength + LENGTH_STEP; l <= length; l += LENGTH_STEP) {
    const afterThreshold = row.threshold !== null && row.stepAfter !== null && l > row.threshold
    total += afterThreshold ? row.stepAfter! : row.step
  }
  return total
}

export const formatPrice = (n: number) => `${Math.round(n).toLocaleString('ru-RU')} ₽`

export const priceSheetUrl = (sheetId: string, gid: string) =>
  `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&headers=1&gid=${gid}`

export const fetchPriceRows = async (sheetId: string, gid: string): Promise<PriceRow[]> => {
  const text = await $fetch<string>(priceSheetUrl(sheetId, gid), { responseType: 'text', timeout: 8000 })
  const rows = parsePriceSheet(text)
  if (!rows.length) throw new Error('Таблица цен пустая')
  return rows
}

export const usePrices = () => useState<PriceRow[]>('prices', () => parsePriceSheet(defaultPricesCsv))

/**
 * Загружает цены из таблицы: при генерации сайта (попадают в HTML)
 * и ещё раз в браузере — чтобы правки в таблице были видны без пересборки.
 */
export const useLoadPrices = async () => {
  const prices = usePrices()
  const { pricesSheetId, pricesSheetGid } = useRuntimeConfig().public
  if (!pricesSheetId) return

  const load = () =>
    fetchPriceRows(pricesSheetId, pricesSheetGid)
      .then((rows) => { prices.value = rows })
      .catch((error) => console.warn('Цены из таблицы не загрузились, показаны цены по умолчанию', error))

  // onMounted регистрируем до await, пока доступен текущий компонент
  onMounted(load)
  await callOnce('prices', load)
}
