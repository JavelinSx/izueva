<script setup lang="ts">
import { Autoplay, EffectCoverflow, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Autoplay, Pagination, EffectCoverflow, Zoom]

// Массив изображений для слайдера акций
const actionSlides = [
  {
    image: '/images/certificate.webp',
    title: 'Подарочный сертификат',
    description: 'На любую сумму'
  },
  {
    image: '/images/card.webp',
    title: 'Карта любимого клиента',
    description: 'При первом посещении'
  },
  {
    image: '/images/memo.webp',
    title: 'Памятка по уходу',
    description: 'Профессиональные рекомендации'
  }
]

const selectedImage = ref<string | null>(null)

const handleCardClick = (image: string) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}
</script>

<template>
  <div class="w-full bg-main overflow-visible">
    <section id="action-section" class="relative p-[25px] pt-0 pb-10 max-w-[1400px] mx-auto
             md:p-[70px]
             lg:p-[70px]
             xl:p-[70px]">
      <h2 class="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-text text-center mb-8
               md:mb-12">
        АКЦИИ
      </h2>

      <!-- Текстовое описание -->
      <div class="text-center  md:mb-16 max-w-3xl mx-auto px-4">
        <p class="text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-text-900">
          При первом посещении вы получаете <strong class="text-button-600">карту любимого клиента</strong> и памятку по
          уходу за волосами.
        </p>
        <p class="text-button-600 font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
          А также можете приобрести подарочный сертификат на любую сумму.
        </p>
      </div>

      <!-- 3D Coverflow слайдер -->
      <div class="w-full max-w-5xl mx-auto px-4">
        <Swiper :modules="modules" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="1"
          :pagination="{ clickable: true, dynamicBullets: true }" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }" :speed="1000" :coverflowEffect="{
            rotate: 15,
            stretch: 20,
            depth: 80,
            modifier: 1.2,
            slideShadows: false
          }" :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }" class="action-coverflow-swiper">
          <SwiperSlide v-for="(slide, index) in actionSlides" :key="index">
            <div class="action-card cursor-pointer" @click="handleCardClick(slide.image)">
              <div class="image-container">
                <NuxtImg :src="slide.image" :alt="slide.title" loading="lazy" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Popup для увеличенного просмотра -->
      <Transition name="fade">
        <div v-if="selectedImage"
          class="fixed inset-0 z-[120] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          @click="closeImage">
          <button
            class="absolute top-4 right-4 z-10 w-14 h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 group border-2 border-white/40 hover:border-white/60 hover:rotate-90"
            aria-label="Закрыть">
            <span class="absolute w-7 h-0.5 bg-white rotate-45 transition-transform duration-300" />
            <span class="absolute w-7 h-0.5 bg-white -rotate-45 transition-transform duration-300" />
          </button>
          <div class="w-full h-full flex items-center justify-center p-4">
            <NuxtImg :src="selectedImage" alt="Увеличенное изображение"
              class="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl shadow-2xl" @click.stop />
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>

<style scoped>
/* Основные стили для Coverflow слайдера */
:deep(.action-coverflow-swiper) {
  --swiper-pagination-color: #d4b5d3;
  padding: 50px 10px 80px 10px;
  overflow: visible;
  min-height: 500px;
}

@media (min-width: 768px) {
  :deep(.action-coverflow-swiper) {
    padding: 60px 20px 90px 20px;
  }
}

:deep(.action-coverflow-swiper .swiper-wrapper) {
  align-items: center;
}

/* Стили для каждого слайда */
:deep(.action-coverflow-swiper .swiper-slide) {
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none !important;
}

/* Убираем тени от Swiper Coverflow */
:deep(.swiper-slide-shadow-left),
:deep(.swiper-slide-shadow-right) {
  display: none !important;
  opacity: 0 !important;
}

/* Стили пагинации */
:deep(.swiper-pagination) {
  bottom: 20px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(212, 181, 211, 0.4);
  opacity: 1;
  transition: all 0.4s ease;
  margin: 0 6px !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: linear-gradient(135deg, #d4b5d3, #c39dc2);
  transform: scale(1.6);
  box-shadow: 0 4px 16px rgba(212, 181, 211, 0.7);
  border-radius: 8px;
  width: 24px;
}

:deep(.swiper-pagination-bullet-active-prev),
:deep(.swiper-pagination-bullet-active-next) {
  transform: scale(1.2);
  background: rgba(212, 181, 211, 0.7);
}

/* Карточка */
.action-card {
  width: 100%;
  max-width: 300px;
  height: auto;
  background: transparent;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .action-card {
    max-width: 350px;
  }
}

@media (min-width: 768px) {
  .action-card {
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  .action-card {
    max-width: 300px;
  }
}

@media (min-width: 1280px) {
  .action-card {
    max-width: 350px;
  }
}

/* Контейнер изображения с тенью */
.image-container {
  position: relative;
  width: 100%;
  display: block;
  line-height: 0;
  border-radius: 24px;
  overflow: hidden;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.25)) drop-shadow(0 20px 60px rgba(212, 181, 211, 0.2));
  transition: filter 0.5s ease;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  background: transparent;
  margin: 0;
  padding: 0;
  vertical-align: top;
}

/* Тень при hover */
.action-card:hover .image-container {
  filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3)) drop-shadow(0 25px 70px rgba(212, 181, 211, 0.35)) drop-shadow(0 5px 15px rgba(212, 181, 211, 0.4));
}

/* Тень для активного слайда */
:deep(.swiper-slide-active) .image-container {
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 30px 80px rgba(212, 181, 211, 0.4)) drop-shadow(0 10px 25px rgba(212, 181, 211, 0.5));
}

/* Fade transition для popup */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
