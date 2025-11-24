<script setup lang="ts">
interface Props {
  title: string
  imgSrc: string
  price: number[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  openPopup: []
}>()

const priceText = computed(() => {
  return props.price.length === 2
    ? `От ${props.price[0]} до ${props.price[1]}`
    : `От ${props.price[0]}`
})

const handleClick = () => {
  emit('openPopup')
}
</script>

<template>
  <div
    class="price-card group relative flex flex-col bg-main rounded-lg md:rounded-2xl overflow-hidden shadow-card hover:shadow-dark transition-all duration-500 h-full min-h-[280px] md:min-h-[600px] hover:-translate-y-2">
    <div class="image-container relative overflow-hidden">
      <NuxtImg :src="imgSrc" :alt="title" loading="lazy"
        class="w-full h-[140px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      </div>
    </div>
    <div class="flex flex-col justify-between p-2 md:p-4 flex-1 gap-1.5 md:gap-3">
      <h5
        class="text-xs md:text-base font-bold text-text group-hover:text-primary transition-colors duration-300 leading-tight">
        {{ title }}</h5>
      <div class="flex flex-col gap-1.5 md:gap-3 mt-auto">
        <div
          class="text-sm md:text-base font-bold text-primary group-hover:scale-105 transition-transform duration-300">
          {{
            priceText }}₽</div>
        <button
          class="relative px-3 py-1.5 md:px-6 md:py-2.5 text-xs md:text-base font-semibold hover:cursor-pointer bg-gradient-to-r from-button to-primary text-text rounded-lg md:rounded-xl hover:from-primary hover:to-button hover:text-main transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden group/btn"
          @click="handleClick">
          <span class="relative z-10 text-white text-sm md:text-xl">Подробнее</span>
          <div
            class="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300">
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
