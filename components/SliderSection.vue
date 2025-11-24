<script setup lang="ts">
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { sliderVideo } = useImageSlides()
const modules = [Autoplay, EffectCoverflow]
</script>

<template>
  <div class="w-full bg-primary py-4 md:py-24" id="view-section">
    <section class="max-w-7xl mx-auto px-4">
      <h2 class="text-title text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl md:pb-8">ПРИМЕРЫ РАБОТ ДО\ПОСЛЕ</h2>

      <Swiper :modules="modules" :slides-per-view="1" :space-between="30"
        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }" :effect="'coverflow'"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }" :breakpoints="{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 }
        }" :loop="true" :speed="800" class="video-swiper">
        <SwiperSlide v-for="(item, index) in sliderVideo" :key="index" class="">
          <WrapperIframe :link="item.link" :link-wrapper="item.img" />
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style scoped>
:deep(.video-swiper) {
  --swiper-navigation-color: #ffffff;
  --swiper-pagination-color: #d4b5d3;
  --swiper-navigation-size: 40px;
  padding: 20px 0;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(255, 255, 255, 0.25);
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: rgba(212, 181, 211, 0.3);
  border-color: rgba(212, 181, 211, 0.6);
  transform: scale(1.15);
  box-shadow: 0 8px 25px rgba(212, 181, 211, 0.3);
}

:deep(.swiper-button-next):after,
:deep(.swiper-button-prev):after {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: #d4b5d3;
  transform: scale(1.4);
  box-shadow: 0 4px 12px rgba(212, 181, 211, 0.5);
}

:deep(.swiper-slide) {
  transition: all 0.4s ease;
}

:deep(.swiper-slide-active) {
  transform: scale(1.02);
}
</style>
