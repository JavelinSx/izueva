<script setup lang="ts">
const services = useServices()

// Выбранная процедура (по названию — так выбор не сбивается, когда цены подгружаются из таблицы)
const calcService = useState<string>('calc-service', () => '')
const mainName = computed({
  get: () => services.value.some(s => s.name === calcService.value)
    ? calcService.value
    : services.value[0]?.name ?? '',
  set: (name: string) => {
    calcService.value = name
  },
})
const main = computed(() => services.value.find(s => s.name === mainName.value))

const length = ref(50)
const lengthFill = computed(() => `${((length.value - LENGTH_MIN) / (LENGTH_MAX - LENGTH_MIN)) * 100}%`)
const lengthTicks = computed(() => {
  const ticks: number[] = []
  for (let l = LENGTH_MIN; l <= LENGTH_MAX; l += 20) ticks.push(l)
  return ticks
})

// Дополнения — услуги со скидкой в комплексе (например, пилинг)
const addonNames = ref<string[]>([])
const addonOptions = computed(() => services.value.filter(s => s.comboDiscount > 0 && s.name !== mainName.value))
watch(mainName, (name) => {
  addonNames.value = addonNames.value.filter(n => n !== name)
})

const selected = computed(() => [
  ...(main.value ? [main.value] : []),
  ...addonOptions.value.filter(s => addonNames.value.includes(s.name)),
])

const needsLength = computed(() => selected.value.some(s => s.step > 0))

const lines = computed(() => {
  const combo = selected.value.length > 1
  return selected.value.map((s) => {
    const full = priceAt(s, length.value)
    const discount = combo ? s.comboDiscount : 0
    return {
      name: s.title,
      byLength: s.step > 0,
      full,
      total: Math.round(full * (1 - discount / 100)),
      discount,
    }
  })
})

const total = computed(() => lines.value.reduce((sum, line) => sum + line.total, 0))
</script>

<template>
  <section id="calculator" class="mx-auto max-w-[1240px] px-4 pb-[clamp(80px,9vw,128px)] md:px-12">
    <div v-animate="'fade-in-up'" class="glass flex flex-wrap overflow-hidden rounded-[clamp(28px,4vw,44px)]">
      <div class="flex min-w-0 flex-[1_1_560px] flex-col gap-7 p-[clamp(24px,4vw,56px)]">
        <SectionHeading eyebrow="Калькулятор">
          Примерный <span class="italic text-rose">расчёт стоимости</span>
        </SectionHeading>

        <fieldset class="m-0 flex flex-col gap-3 border-0 p-0">
          <legend class="mb-3 p-0 text-[13px] font-semibold uppercase tracking-[0.12em] text-mist">Процедура</legend>
          <div class="flex flex-wrap gap-2.5">
            <label v-for="s in services" :key="s.name"
              class="relative inline-flex min-h-11 cursor-pointer items-center rounded-full border px-[18px] text-[15px] font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-rose"
              :class="s.name === mainName ? 'border-plum bg-plum text-petal' : 'border-plum/20 bg-white/70 text-plum hover:border-plum'">
              <input v-model="mainName" type="radio" name="calc-service" :value="s.name" class="sr-only">
              {{ s.title }}
            </label>
          </div>
        </fieldset>

        <div v-if="needsLength" class="flex flex-col gap-2.5">
          <label for="calc-length" class="flex justify-between text-[15px] font-semibold">
            <span>Длина волос</span>
            <span class="text-rose">{{ length }} см</span>
          </label>
          <input id="calc-length" v-model.number="length" type="range" :min="LENGTH_MIN" :max="LENGTH_MAX"
            :step="LENGTH_STEP" class="range" :style="{ '--fill': lengthFill }">
          <div aria-hidden="true" class="flex justify-between text-xs text-mist">
            <span v-for="tick in lengthTicks" :key="tick">{{ tick }}</span>
          </div>
        </div>

        <fieldset v-if="addonOptions.length" class="m-0 flex flex-col gap-3 border-0 p-0">
          <legend class="mb-3 p-0 text-[13px] font-semibold uppercase tracking-[0.12em] text-mist">
            Добавить к процедуре
          </legend>
          <label v-for="s in addonOptions" :key="s.name"
            class="flex min-h-14 cursor-pointer items-center gap-3.5 rounded-[20px] border px-[18px] py-3 transition-colors"
            :class="addonNames.includes(s.name) ? 'border-rose bg-rose/5' : 'border-plum/15 bg-white/60 hover:border-plum/40'">
            <input v-model="addonNames" type="checkbox" :value="s.name" class="h-5 w-5 flex-none accent-rose">
            <span class="flex flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <span class="font-semibold">{{ s.title }}</span>
              <span class="text-sm text-mist">
                <s>{{ formatPrice(s.price) }}</s>
                <b class="ml-1.5 font-semibold text-rose">
                  {{ formatPrice(Math.round(s.price * (1 - s.comboDiscount / 100))) }} · −{{ s.comboDiscount }}%
                </b>
              </span>
            </span>
          </label>
        </fieldset>
      </div>

      <div class="relative flex flex-[1_1_340px] flex-col justify-between gap-8 overflow-hidden bg-plum p-[clamp(24px,4vw,56px)] text-petal">
        <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" stroke="#c9a27e" stroke-width="0.8"
          class="absolute -right-[120px] -top-[120px] h-[380px] w-[380px] opacity-35">
          <circle cx="200" cy="200" r="190" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="110" />
        </svg>

        <div class="relative flex flex-col gap-4" aria-live="polite">
          <span class="text-[13px] font-semibold uppercase tracking-[0.12em] text-rose-light">Примерная стоимость</span>
          <span class="font-display text-[clamp(52px,6vw,80px)] font-medium leading-none">{{ formatPrice(total) }}</span>
          <ul class="m-0 flex list-none flex-col gap-2 p-0 text-[15px]">
            <li v-for="line in lines" :key="line.name" class="flex items-baseline justify-between gap-4 border-b border-petal/15 pb-2">
              <span>
                {{ line.name }}<template v-if="line.byLength">, {{ length }} см</template>
                <span v-if="line.discount" class="ml-1 text-rose-light">−{{ line.discount }}%</span>
              </span>
              <span class="whitespace-nowrap font-semibold">{{ formatPrice(line.total) }}</span>
            </li>
          </ul>
        </div>

        <div class="relative flex flex-col gap-[18px]">
          <p class="m-0 text-[15px] leading-relaxed text-petal/80">
            Расчёт в калькуляторе — примерный. Точную стоимость можно узнать после очной консультации.
          </p>
          <a href="tel:89021962407"
            class="btn-lift inline-flex min-h-[52px] items-center self-start rounded-full bg-petal px-[26px] text-[15px] font-semibold text-plum no-underline">
            Записаться на консультацию
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
