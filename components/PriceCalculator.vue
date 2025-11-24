<script setup lang="ts">
interface WidthPriceStep {
  width: number[]
  price: number
}

interface ServiceOption {
  label: string
  value: string
  calculate: boolean
  startPrice: number
  stepVolumePrice: number
  stepWidthPrice: WidthPriceStep[]
}

const widthPriceStep: WidthPriceStep[] = [
  { width: [7, 8], price: 600 },
  { width: [9, 10], price: 900 },
  { width: [11, 12], price: 1100 },
]

const selectedLabel = ref('')
const selectedValue = ref<ServiceOption>({
  label: '',
  value: '',
  stepVolumePrice: 0,
  stepWidthPrice: widthPriceStep,
  startPrice: 0,
  calculate: true,
})

const selectHairVolume = ref('30')
const selectHairWidth = ref('7')
const constPay = ref(0)
const widthCalculate = ref(false)
const volumeCalculate = ref(false)
const hairVolume = ref<HTMLInputElement | null>(null)
const hairWidth = ref<HTMLInputElement | null>(null)
const isOpen = ref(false)

const options: ServiceOption[] = [
  {
    label: 'Тотальное восстановление',
    value: 'totalRecovery',
    calculate: false,
    startPrice: 2500,
    stepVolumePrice: 0,
    stepWidthPrice: [{ width: [0], price: 0 }],
  },
  {
    label: 'Холодное восстановление',
    value: 'coldRecovery',
    stepVolumePrice: 600,
    stepWidthPrice: [{ width: [0], price: 0 }],
    startPrice: 1600,
    calculate: true,
  },
  {
    label: 'SPA уход',
    value: 'careSpa',
    stepVolumePrice: 600,
    startPrice: 2300,
    calculate: true,
    stepWidthPrice: [{ width: [0], price: 0 }],
  },
  {
    label: 'Пилинг кожи головы',
    value: 'peelingScalp',
    calculate: false,
    startPrice: 500,
    stepVolumePrice: 0,
    stepWidthPrice: [{ width: [0], price: 0 }],
  },
  {
    label: 'Коллагеновое обёртование',
    value: 'collagenWrap',
    stepVolumePrice: 600,
    stepWidthPrice: [{ width: [0], price: 0 }],
    startPrice: 1400,
    calculate: true,
  },
  {
    label: 'Ботокс',
    value: 'botox',
    stepVolumePrice: 600,
    stepWidthPrice: widthPriceStep,
    startPrice: 2500,
    calculate: true,
  },
  {
    label: 'Кератиновое выпрямление',
    value: 'keratinStraighten',
    stepVolumePrice: 600,
    stepWidthPrice: widthPriceStep,
    startPrice: 2800,
    calculate: true,
  },
]

const getPriceWidth = (width: number): number => {
  for (const item of widthPriceStep) {
    const [minWidth, maxWidth] = item.width
    if (width >= minWidth && width <= maxWidth) {
      return item.price
    }
  }
  return 0
}

onMounted(() => {
  selectedLabel.value = options[0].label
  selectedValue.value = options[0]
})

watch(selectedValue, (newValue) => {
  if (newValue.calculate) {
    volumeCalculate.value = true
    if (newValue.stepWidthPrice[0].price > 0) {
      widthCalculate.value = true
    } else {
      widthCalculate.value = false
    }
  } else {
    volumeCalculate.value = false
    widthCalculate.value = false
  }
})

watch([selectedValue, selectHairVolume, selectHairWidth, isOpen], () => {
  if (!selectedValue.value.calculate) {
    constPay.value = selectedValue.value.startPrice
  } else {
    let price = selectedValue.value.startPrice
    if (volumeCalculate.value) {
      const stepPayVolume = (parseInt(selectHairVolume.value) - 40) / 10
      price += stepPayVolume * selectedValue.value.stepVolumePrice
    }
    if (widthCalculate.value) {
      const widthPrice = getPriceWidth(parseInt(selectHairWidth.value))
      price += widthPrice
    }
    constPay.value = price
  }
})

watch(isOpen, (newValue) => {
  if (newValue) {
    resetValues()
  }
})

const handleOpen = () => {
  isOpen.value = !isOpen.value
}

const resetValues = () => {
  if (hairVolume.value) {
    hairVolume.value.value = '30'
    selectHairVolume.value = '30'
  }
  if (hairWidth.value) {
    hairWidth.value.value = '7'
    selectHairWidth.value = '7'
  }
}

const handleSelectItem = (item: ServiceOption) => {
  selectedLabel.value = item.label
  selectedValue.value = item
  isOpen.value = false
}

const handleChangeHairVolume = () => {
  if (hairVolume.value?.value) {
    selectHairVolume.value = hairVolume.value.value
  }
}

const handleChangeHairWidth = () => {
  if (hairWidth.value?.value) {
    selectHairWidth.value = hairWidth.value.value
  }
}
</script>

<template>
  <div class="w-full bg-primary py-16" id="calculator-section">
    <section class="max-w-3xl mx-auto px-4">
      <h2 class="text-title  text-center text-main mb-4 text-xl md:text-3xl lg:text-4xl xl:text-5xl">Примерный расчёт стоимости услуг
      </h2>
      <h5 class="text-sm md:text-base lg:text-lg xl:text-xl text-center text-main mb-8">
        Расчёт в калькуляторе - примерный. Точную стоимость можно узнать после очной коснультации.
      </h5>

      <!-- Service selector -->
      <label class="block text-base md:text-lg lg:text-xl text-main mb-2">Выберите услугу:</label>
      <div
        class="relative w-full p-4 bg-main border border-text-additional rounded-lg cursor-pointer hover:border-button transition-colors mb-4"
        @click="handleOpen">
        <span class="text-text">{{ selectedLabel }}</span>
      </div>

      <!-- Options dropdown -->
      <ul
        class="text-sm md:text-base lg:text-lg transition-all duration-300 overflow-hidden bg-main border border-text-additional rounded-lg mb-6"
        :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-0'">
        <li v-for="(item, index) in options" :key="index" class="p-4 cursor-pointer transition-colors"
          :class="item.label === selectedLabel ? 'bg-button text-text font-bold' : 'text-text hover:bg-text-additional-400'"
          @click="handleSelectItem(item)">
          {{ item.label }}
        </li>
      </ul>

      <!-- Hair volume slider -->
      <div v-if="volumeCalculate" class="mb-6 text-sm md:text-base lg:text-lg">
        <label class="block text-medium text-main mb-2">Длина волос: {{ selectHairVolume }} см.</label>
        <input ref="hairVolume" type="range" min="30" max="110" step="10" :value="selectHairVolume"
          class="w-full h-2 bg-text-additional rounded-lg appearance-none cursor-pointer accent-button"
          @input="handleChangeHairVolume" />
      </div>

      <!-- Hair width slider -->
      <div v-if="widthCalculate" class="mb-6 text-sm md:text-base lg:text-lg">
        <label class="block text-medium text-main mb-2">Густота волос: {{ selectHairWidth }} см.</label>
        <input ref="hairWidth" type="range" min="7" max="12" :value="selectHairWidth"
          class="w-full h-2 bg-text-additional rounded-lg appearance-none cursor-pointer accent-button"
          @input="handleChangeHairWidth" />
      </div>

      <!-- Price display -->
      <div class="text-center mt-8">
        <span class="text-xl md:text-2xl lg:text-3xl font-bold text-button">От {{ constPay }}₽</span>
      </div>
    </section>
  </div>
</template>
