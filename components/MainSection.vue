<script setup lang="ts">
const { imageSlidesMin } = useImageSlides()

const selectedImg = ref(0)
const open = ref(false)

const handlerOpenImg = (index: number) => {
  selectedImg.value = index
  open.value = true
}

const handleClose = () => {
  open.value = false
}

// Ленивая загрузка SwiperMain только когда попап открывается
const SwiperMain = defineAsyncComponent(() => import('./SwiperMain.vue'))
</script>

<template>
  <div class="bg-main flex items-center justify-center py-8 md:py-16 lg:py-24">
    <section id="view-section" class="max-w-7xl w-full mt-20 md:mt-10">
      <h2 v-animate="'fade-in-down'" class="text-2xl md:text-4xl lg:text-5xl text-center text-text mb-8 md:mb-12">
        РАБОТЫ МАСТЕРА
      </h2>

      <div v-animate="{ animation: 'fade-in-up', delay: 200 }">
        <CircularCarouselV2 :images="imageSlidesMin" @open-image="handlerOpenImg" />
      </div>

      <SwiperMain :start-slide="selectedImg" :open="open" @close="handleClose" />
    </section>
  </div>
</template>
