<script setup lang="ts">
import type { Service } from '~/composables/useServices'

const props = defineProps<{
  service: Service
}>()

const emit = defineEmits<{
  close: []
}>()

// Цены по длине: «до N см», затем каждые 10 см до максимума калькулятора
const lengthPrices = computed(() => {
  const s = props.service
  if (!s.step) return []
  const start = Math.max(s.baseLength, LENGTH_MIN)
  const rows = [{ label: `до ${start} см`, price: formatPrice(priceAt(s, start)) }]
  for (let l = start + LENGTH_STEP; l <= LENGTH_MAX; l += LENGTH_STEP) {
    rows.push({ label: `${l} см`, price: formatPrice(priceAt(s, l)) })
  }
  return rows
})

// «Рассчитать стоимость» открывает калькулятор с этой услугой
const calcService = useState<string>('calc-service', () => '')
const toCalculator = () => {
  calcService.value = props.service.name
  emit('close')
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[120] flex items-center justify-center bg-plum-deep/55 p-3 backdrop-blur-sm sm:p-5"
      @click.self="emit('close')">
      <div role="dialog" aria-modal="true" :aria-label="service.title"
        class="relative flex max-h-[calc(100dvh-24px)] w-full max-w-[960px] flex-wrap overflow-auto rounded-[32px] bg-petal shadow-2xl sm:max-h-[calc(100dvh-40px)] sm:rounded-[40px]">
        <div class="flex-[1_1_300px] p-4 sm:p-5">
          <img :src="service.img" :alt="service.title"
            class="block h-full max-h-[620px] min-h-[260px] w-full object-cover [border-radius:50%_50%_24px_24px/30%_30%_24px_24px]">
        </div>

        <div class="flex min-w-0 flex-[1_1_420px] flex-col gap-5 px-6 pb-8 pt-2 sm:py-10 sm:pl-4 sm:pr-11">
          <div class="flex flex-col gap-2 pr-12">
            <span v-if="service.content?.effect" class="font-display text-lg italic text-rose">
              {{ service.content.effect }}
            </span>
            <h3 class="m-0 font-display text-[clamp(34px,3.4vw,46px)] font-medium leading-none">{{ service.title }}</h3>
            <span class="text-xl font-bold">{{ service.priceText }}</span>
          </div>

          <p v-if="service.content?.description" class="m-0 text-base leading-relaxed text-mist">
            {{ service.content.description }}
          </p>
          <p v-else-if="service.content?.lead" class="m-0 text-base leading-relaxed text-mist">
            {{ service.content.lead }}
          </p>

          <p v-if="service.comboDiscount" class="m-0 rounded-3xl bg-rose/10 px-5 py-4 text-[15px] font-semibold text-rose">
            Вместе с любой другой процедурой — скидка {{ service.comboDiscount }}%.
          </p>

          <div v-if="lengthPrices.length" class="flex flex-col gap-3">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-rose">Цена по длине волос</span>
            <dl class="m-0 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3">
              <div v-for="row in lengthPrices" :key="row.label"
                class="flex items-baseline justify-between gap-2 border-b border-plum/10 py-1.5 text-[15px]">
                <dt class="text-mist">{{ row.label }}</dt>
                <dd class="m-0 font-semibold">{{ row.price }}</dd>
              </div>
            </dl>
          </div>

          <div v-if="service.content?.consist?.length" class="flex flex-col gap-3">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-rose">Состав процедуры</span>
            <ol class="m-0 flex list-none flex-col gap-2 p-0">
              <li v-for="(step, i) in service.content.consist" :key="step" class="flex items-baseline gap-3 text-[15px]">
                <span class="flex-none font-display text-lg italic text-rose">{{ String(i + 1).padStart(2, '0') }}</span>
                <span>{{ step }}</span>
              </li>
            </ol>
          </div>

          <div v-if="service.content?.extra?.length" class="flex flex-col gap-3 rounded-3xl bg-powder p-5">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-mist">Важно знать</span>
            <ul class="m-0 flex list-none flex-col gap-2 p-0">
              <li v-for="item in service.content.extra" :key="item" class="flex items-baseline gap-3 text-[15px] leading-normal">
                <span aria-hidden="true" class="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-champagne" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-3">
            <a href="tel:89021962407"
              class="btn-lift inline-flex min-h-[52px] items-center rounded-full bg-rose px-[26px] text-[15px] font-semibold text-white no-underline">
              Записаться
            </a>
            <a href="#calculator"
              class="btn-lift inline-flex min-h-[52px] items-center rounded-full border border-plum px-[26px] text-[15px] font-semibold text-plum no-underline hover:bg-plum hover:text-petal"
              @click="toCalculator">
              Рассчитать стоимость
            </a>
          </div>
        </div>

        <button type="button" aria-label="Закрыть"
          class="absolute right-4 top-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-plum/20 bg-white text-plum"
          @click="emit('close')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
            stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>
