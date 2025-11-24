<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

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

const handleSlideClick = (index: number) => {
  emit('openImage', index)
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
          :pagination="{ clickable: true, dynamicBullets: true }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :cardsEffect="{
            perSlideOffset: 15,
            perSlideRotate: 3,
            rotate: true,
            slideShadows: true
          }"
          class="cards-swiper"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index" @click="handleSlideClick(index)">
            <div class="card-wrapper cursor-pointer">
              <NuxtImg
                :src="image"
                :alt="`Image ${index + 1}`"
                class="w-full h-full object-cover rounded-2xl"
                loading="lazy"
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
}

:deep(.cards-swiper .swiper-wrapper) {
  overflow: visible !important;
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
  transition: transform 0.3s ease;
}

.card-wrapper:hover {
  transform: scale(1.02);
}
</style>
