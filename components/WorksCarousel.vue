<script setup lang="ts">
import { Keyboard, Mousewheel, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { sliderWork } = useImageSlides()
const modules = [Zoom, Keyboard, Mousewheel]

const isFullView = ref(false)
const selectedIndex = ref(0)

const openFullView = (index: number) => {
  selectedIndex.value = index
  isFullView.value = true
}

const closeFullView = () => {
  isFullView.value = false
}

// Debug
onMounted(() => {
  console.log('WorksCarousel mounted', { sliderWork: sliderWork.length, modules: modules.length })
})
</script>

<template>
  <div class="works-carousel col-start-1 col-end-4 w-full lg:col-start-1 lg:col-end-7 xl:col-start-1 xl:col-end-7">
    <!-- Обычная карусель -->
    <Swiper v-if="!isFullView" :modules="modules" :slides-per-view="1" :space-between="30" :breakpoints="{
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 }
    }" :loop="true" :speed="800" class="works-swiper">
      <SwiperSlide v-for="(slide, index) in sliderWork" :key="index" class="pb-12 cursor-pointer">
        <div class="slide-container" @click="() => openFullView(index)">
          <NuxtImg :src="slide" :alt="`Work ${index + 1}`"
            class="w-full h-[300px] object-cover rounded-3xl shadow-card transition-transform duration-300 hover:scale-105"
            loading="lazy" />
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Fullview режим -->
    <Transition name="fade">
      <div v-if="isFullView" class="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm">
        <button
          class="fixed top-4 right-4 z-[120] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group border-2 border-white/20 hover:border-white/40"
          @click="closeFullView">
          <span
            class="absolute w-6 h-0.5 bg-white rotate-45 group-hover:rotate-[135deg] transition-transform duration-300" />
          <span
            class="absolute w-6 h-0.5 bg-white -rotate-45 group-hover:-rotate-[135deg] transition-transform duration-300" />
        </button>

        <div class="w-full h-full flex items-center justify-center p-4 md:p-8">
          <div class="w-full h-full max-w-6xl max-h-[90vh]">
            <Swiper :modules="modules" :slides-per-view="1" :space-between="20" :initial-slide="selectedIndex"
              :zoom="{ maxRatio: 3, minRatio: 1 }" :keyboard="{ enabled: true }" :mousewheel="{ forceToAxis: true }"
              :loop="true" :speed="600" class="h-full rounded-2xl swiper-gallery">
              <SwiperSlide v-for="(slide, index) in sliderWork" :key="index" class="flex items-center justify-center">
                <div class="swiper-zoom-container flex items-center justify-center h-full">
                  <NuxtImg :src="slide" :alt="`Work ${index + 1}`"
                    class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" loading="lazy" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Transition>
  </div>
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

:deep(.works-swiper) {
  --swiper-navigation-color: #d4b5d3;
  --swiper-pagination-color: #d4b5d3;
  --swiper-navigation-size: 40px;
  padding: 20px 0;
}

:deep(.swiper-slide) {
  transition: all 0.4s ease;
  width: auto !important;
}

:deep(.swiper-slide-active) {
  transform: scale(1.02);
}

:deep(.slide-container) {
  max-width: 400px;
  margin: 0 auto;
}

:deep(.works-swiper .swiper-button-next),
:deep(.works-swiper .swiper-button-prev) {
  background: rgba(212, 181, 211, 0.15);
  backdrop-filter: blur(8px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 2px solid rgba(212, 181, 211, 0.3);
}

:deep(.works-swiper .swiper-button-next:hover),
:deep(.works-swiper .swiper-button-prev:hover) {
  background: rgba(212, 181, 211, 0.3);
  border-color: rgba(212, 181, 211, 0.6);
  transform: scale(1.1);
}

:deep(.works-swiper .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.works-swiper .swiper-pagination-bullet-active) {
  opacity: 1;
  transform: scale(1.3);
}

:deep(.swiper-gallery) {
  --swiper-navigation-color: #fff;
  --swiper-pagination-color: #d4b5d3;
  --swiper-navigation-size: 44px;
}

:deep(.swiper-gallery .swiper-button-next),
:deep(.swiper-gallery .swiper-button-prev) {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

:deep(.swiper-gallery .swiper-button-next:hover),
:deep(.swiper-gallery .swiper-button-prev:hover) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

:deep(.swiper-gallery .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.swiper-gallery .swiper-pagination-bullet-active) {
  opacity: 1;
  transform: scale(1.3);
}
</style>
