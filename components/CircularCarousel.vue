<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

interface Props {
  images: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  openImage: [index: number]
}>()

const modules = [EffectCards, Pagination, Autoplay]
const swiperRef = ref<SwiperType | null>(null)

const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
}

const handleSlideClick = (event: MouseEvent) => {
  // Проверяем что клик именно на активном слайде
  const clickedSlide = (event.target as HTMLElement).closest('.swiper-slide')
  if (!clickedSlide || !swiperRef.value) return

  // Проверяем что это активный слайд
  if (!clickedSlide.classList.contains('swiper-slide-active')) return

  // Используем realIndex - правильный индекс в loop mode
  const realIndex = swiperRef.value.realIndex
  emit('openImage', realIndex)
}
</script>

<template>
  <div class="cards-carousel relative w-full py-4 md:py-8 flex items-center justify-center overflow-visible">
    <div class="w-full px-8 md:px-12 flex justify-center overflow-visible">
      <div class="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[500px] lg:max-w-[600px]">
        <Swiper
          :modules="modules"
          :effect="'cards'"
          :grabCursor="true"
          :loop="true"
          :initialSlide="2"
          :cardsEffect="{
            perSlideOffset: 15,
            perSlideRotate: 3,
            rotate: true,
            slideShadows: false
          }"
          :speed="500"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          class="cards-swiper"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index" @click="handleSlideClick">
            <div class="card-wrapper cursor-pointer">
              <img
                :src="image"
                :alt="`Image ${index + 1}`"
                class="w-full h-full object-cover rounded-2xl"
                loading="eager"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Swiper Cards стили */
:deep(.cards-swiper) {
  --swiper-pagination-color: #d4b5d3;
  padding-bottom: 50px;
  width: 100%;
  height: 380px;
  overflow: visible !important;
  /* GPU acceleration */
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

:deep(.cards-swiper .swiper-wrapper) {
  overflow: visible !important;
  /* Оптимизация производительности */
  transform: translate3d(0, 0, 0);
}

@media (min-width: 640px) {
  :deep(.cards-swiper) {
    height: 440px;
  }
}

@media (min-width: 768px) {
  :deep(.cards-swiper) {
    height: 600px;
    padding-bottom: 60px;
  }
}

@media (min-width: 1024px) {
  :deep(.cards-swiper) {
    height: 700px;
  }
}

:deep(.cards-swiper .swiper-slide) {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 85% !important;
  /* GPU acceleration для плавности */
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@media (min-width: 768px) {
  :deep(.cards-swiper .swiper-slide) {
    width: 90% !important;
  }
}

:deep(.cards-swiper .swiper-pagination) {
  bottom: 10px !important;
}

:deep(.cards-swiper .swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(212, 181, 211, 0.4);
  opacity: 1;
  transition: all 0.3s ease;
  margin: 0 6px !important;
}

:deep(.cards-swiper .swiper-pagination-bullet-active) {
  background: linear-gradient(135deg, #d4b5d3, #c39dc2);
  transform: scale(1.4);
  box-shadow: 0 4px 12px rgba(212, 181, 211, 0.6);
}

.card-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* GPU acceleration */
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

.card-wrapper img {
  /* Отключаем плавный переход для изображений */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Hover только когда swiper не активен */
:deep(.swiper-slide-active) .card-wrapper:hover {
  transform: translate3d(0, 0, 0) scale(1.02);
  transition: transform 0.2s ease-out;
}
</style>
