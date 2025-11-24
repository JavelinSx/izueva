<script setup lang="ts">
import type { PriceItemListProps } from '~/data/priceItemList'

interface Props {
  item: PriceItemListProps
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const priceText = computed(() => {
  return props.item.price.length === 2
    ? `От ${props.item.price[0]} до ${props.item.price[1]}`
    : `От ${props.item.price[0]}`
})

const handleClick = () => {
  emit('close')
}

const moveToCalculator = () => {
  emit('close')
}
</script>

<template>
  <div>
    <!-- Popup overlay -->
    <div
      class="fixed inset-0 bg-black/50 z-[999]"
      @click="handleClick"
    />

    <!-- Popup content -->
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-main rounded-lg shadow-dark max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto z-[1000]">
      <!-- Image section -->
      <div class="relative h-64 overflow-hidden rounded-t-lg">
        <NuxtImg
          :src="item.imgSrc"
          :alt="item.service"
          loading="lazy"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <!-- Title -->
      <h5 class="text-lg md:text-xl lg:text-2xl font-bold text-primary px-6 pt-6 pb-2">{{ item.service }}</h5>

      <!-- Content wrapper -->
      <div class="px-6 pb-6 space-y-4">
        <!-- Description -->
        <p class="text-sm md:text-base text-text leading-relaxed">{{ item.description }}</p>

        <!-- Consist list -->
        <ul class="space-y-2 bg-secondary/30 rounded-lg p-4">
          <li
            v-for="(consistItem, index) in item.consist"
            :key="index"
            class="text-sm md:text-base text-text flex items-start gap-3 before:content-['•'] before:text-button before:font-bold before:text-lg"
          >
            {{ consistItem }}
          </li>
        </ul>

        <!-- Additional info -->
        <ul class="space-y-2 pt-2">
          <li
            v-for="(additionalItem, index) in item.additionaly"
            :key="index"
            class="text-xs md:text-sm text-text-700 italic flex items-start gap-2 before:content-['→'] before:text-button-500 before:font-bold"
          >
            {{ additionalItem }}
          </li>
        </ul>

        <!-- Price and calculator button -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-text-additional">
          <div class="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{{ priceText }}₽</div>
          <button
            class="px-6 py-2 text-sm md:text-base bg-button text-text border border-text rounded-lg hover:bg-primary hover:text-main transition-all duration-300"
            @click="moveToCalculator"
          >
            <a href="#calculator-section">Калькулятор</a>
          </button>
        </div>
      </div>

      <!-- Close button -->
      <button
        class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-main/80 hover:bg-main rounded-full transition-all duration-300 group"
        @click="handleClick"
      >
        <span class="absolute w-6 h-0.5 bg-text rotate-45 group-hover:bg-primary transition-colors" />
        <span class="absolute w-6 h-0.5 bg-text -rotate-45 group-hover:bg-primary transition-colors" />
      </button>
    </div>
  </div>
</template>
