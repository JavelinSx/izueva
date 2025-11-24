<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Zoom, Keyboard, Mousewheel, Autoplay } from 'swiper/modules'

interface Props {
  open: boolean
  startSlide: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const { imageSlides } = useImageSlides()
const modules = [Pagination, Zoom, Keyboard, Mousewheel, Autoplay]

const handleClose = () => {
  emit('close')
}

// Debug
onMounted(() => {
  console.log('SwiperMain mounted', { open: props.open, startSlide: props.startSlide, imageSlides: imageSlides.length })
})

watch(() => props.open, (newVal) => {
  console.log('SwiperMain open changed:', newVal)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm">
      <button
        class="fixed top-4 right-4 z-[120] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group border-2 border-white/20 hover:border-white/40"
        @click="handleClose"
      >
        <span class="absolute w-6 h-0.5 bg-white rotate-45 group-hover:rotate-[135deg] transition-transform duration-300" />
        <span class="absolute w-6 h-0.5 bg-white -rotate-45 group-hover:-rotate-[135deg] transition-transform duration-300" />
      </button>

      <div class="w-full h-full flex items-center justify-center p-4 md:p-8">
        <div class="w-full max-w-6xl h-[90vh]">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :initial-slide="startSlide"
            :pagination="{ clickable: true, dynamicBullets: true }"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :zoom="{ maxRatio: 3, minRatio: 1 }"
            :keyboard="{ enabled: true }"
            :mousewheel="{ forceToAxis: true }"
            :loop="true"
            :speed="600"
            class="w-full h-full rounded-2xl swiper-gallery"
          >
            <SwiperSlide v-for="(slide, index) in imageSlides" :key="index" class="flex items-center justify-center">
              <div class="swiper-zoom-container flex items-center justify-center h-full">
                <NuxtImg
                  :src="slide"
                  :alt="`Slide ${index + 1}`"
                  class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(.swiper-gallery) {
  --swiper-pagination-color: #d4b5d3;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  transform: scale(1.3);
}

:deep(.swiper-gallery .swiper-slide) {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper-gallery .swiper-wrapper) {
  height: 100%;
}
</style>
