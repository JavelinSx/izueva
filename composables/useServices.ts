import { fallbackServiceImg, findServiceContent, type ServiceContent } from '~/data/services'
import { formatPrice, usePrices, type PriceRow } from './usePrices'

export interface Service extends PriceRow {
  title: string
  img: string
  content?: ServiceContent
  priceText: string
}

/** Услуги из таблицы цен + описания и фото из data/services.ts */
export const useServices = () => {
  const prices = usePrices()

  return computed<Service[]>(() =>
    prices.value.map((row) => {
      const content = findServiceContent(row.name)
      return {
        ...row,
        title: row.name.charAt(0).toUpperCase() + row.name.slice(1),
        img: content?.img ?? fallbackServiceImg,
        content,
        priceText: `от ${formatPrice(row.price)}`,
      }
    }),
  )
}
