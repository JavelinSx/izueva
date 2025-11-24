<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Autoplay, Pagination]

// Массив изображений студий
const studioImages = [
  { src: '/images/studio/studio.webp', alt: 'Студия Савинск' },
  { src: '/images/studio/studio2.webp', alt: 'Студия Плесецк' },
  { src: '/images/studio/studio3.webp', alt: 'Студия Плесецк 2' }
]
</script>

<template>
  <div class="w-full bg-main">
    <section id="studio-section" class="px-0 py-10 max-w-[1024px] mx-auto
             md:w-full md:p-[70px]
             lg:w-[70%] lg:p-[70px]
             xl:max-w-[1280px] xl:w-[60%] xl:p-[70px]">
      <h2 class="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-text text-center mb-8 px-[25px] md:px-0">
        Студии в Савинском и Плесецке
      </h2>

      <div class="text-sm md:text-base lg:text-lg xl:text-xl text-center text-text mb-8 px-[25px] md:px-0 leading-relaxed
               md:leading-relaxed
               lg:leading-relaxed
               xl:leading-relaxed">
        <p class="mb-4">
          Я предоставляю услуги по восстановлению и реконструкции волос как в <strong
            class="text-primary">Савинске</strong>, так и в <strong class="text-primary">Плесецке</strong>.
        </p>
        <p class="mb-4">
          Обе студии снабжены всем необходимым оборудованием для профессионального ухода за вашими волосами.
        </p>
        <p class="text-button-600 font-medium">
          Также по вашему желанию вас ждёт вкусный чай/кофе и приятные угощения!
        </p>
      </div>

      <!-- Swiper для мобильных -->
      <div class="block md:hidden mb-8 px-[25px]">
        <Swiper
          :modules="modules"
          :slidesPerView="1"
          :spaceBetween="20"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          class="studio-swiper">
          <SwiperSlide v-for="(image, index) in studioImages" :key="index">
            <NuxtImg :src="image.src" :alt="image.alt" class="w-full rounded-2xl shadow-card object-cover" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Grid для десктопа -->
      <div class="hidden md:grid md:grid-cols-3 md:gap-[30px] mb-8">
        <NuxtImg v-for="(image, index) in studioImages" :key="index"
          :src="image.src"
          :alt="image.alt"
          class="w-full rounded-2xl shadow-card object-cover"
          loading="lazy" />
      </div>

      <!-- Drink GIF только для десктопа -->
      <NuxtImg src="/images/studio/drink.gif" alt="Угощения" class="hidden md:block w-full rounded-2xl shadow-card object-cover max-h-[300px]" />
    </section>
  </div>
</template>

<style scoped>
/* Стили для слайдера студий */
:deep(.studio-swiper) {
  --swiper-pagination-color: #d4b5d3;
  padding-bottom: 50px;
}

:deep(.studio-swiper .swiper-pagination) {
  bottom: 10px !important;
}

:deep(.studio-swiper .swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(212, 181, 211, 0.4);
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.studio-swiper .swiper-pagination-bullet-active) {
  background: linear-gradient(135deg, #d4b5d3, #c39dc2);
  transform: scale(1.3);
  box-shadow: 0 2px 8px rgba(212, 181, 211, 0.5);
}
</style>
