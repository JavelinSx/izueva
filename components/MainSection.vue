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
</script>

<template>
  <div class="bg-main flex items-center justify-center py-8 md:py-16 lg:py-24">
    <section id="view-section" class="max-w-7xl w-full mt-20 md:mt-10">
      <h2 class="text-2xl md:text-4xl lg:text-5xl text-center text-text mb-8 md:mb-12">
        Работы Мастера
      </h2>

      <CircularCarouselV2 :images="imageSlidesMin" @open-image="handlerOpenImg" />

      <SwiperMain :start-slide="selectedImg" :open="open" @close="handleClose" />
    </section>
  </div>
</template>
