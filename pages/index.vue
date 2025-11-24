<script setup lang="ts">
const openPopup = ref(false)
const popupItem = ref({
  service: '',
  description: '',
  consist: [''],
  price: [0],
  additionaly: [''],
  imgSrc: '',
})

const handlePopupOpen = () => {
  openPopup.value = true
}

const handlePopupClose = () => {
  openPopup.value = false
}

const setPopupItem = (item: typeof popupItem.value) => {
  popupItem.value = item
}
</script>

<template>
  <div class="min-h-screen w-full">
    <Header />
    <MainSection />
    <MainSectionAbout />

    <!-- Lazy loaded components для секций ниже fold -->
    <ClientOnly>
      <LazySliderSection />
      <LazyPriceSection
        @popup-open="handlePopupOpen"
        @set-popup-item="setPopupItem"
      />
      <LazyPriceCalculator />
      <LazyStudioSection />
      <LazyAction />
      <LazyMapSection />
    </ClientOnly>

    <PricePopup
      v-if="openPopup"
      :item="popupItem"
      @close="handlePopupClose"
    />
  </div>
</template>
