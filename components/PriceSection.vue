<script setup lang="ts">
import type { PriceItemListProps } from '~/data/priceItemList';
import { usePriceItemList } from '~/data/priceItemList';

const { priceItemList } = usePriceItemList()

// Используем stagger анимацию для карточек цен
const { containerRef } = useStaggerAnimation({
  itemSelector: '.price-item',
  animationClass: 'fade-in-up',
  staggerDelay: 100
})

const emit = defineEmits<{
  popupOpen: []
  setPopupItem: [item: PriceItemListProps]
}>()

const handleOpenPopup = (item: PriceItemListProps) => {
  emit('popupOpen')
  emit('setPopupItem', item)
}
</script>

<template>
  <div class="w-full bg-secondary py-8" id="price-section">
    <section class="max-w-7xl mx-auto px-4 md:px-40">
      <h2 v-animate="'fade-in-down'" class=" text-center p-8 text-text text-xl md:text-3xl lg:text-4xl xl:text-5xl">УСЛУГИ И ЦЕНЫ НА
        ВОССТАНОВЛЕНИЕ ВОЛОС</h2>
      <div ref="containerRef" class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <PriceItem v-for="(item, index) in priceItemList" :key="index" class="price-item animate-on-scroll" :title="item.service" :img-src="item.imgSrc"
          :price="item.price" @open-popup="handleOpenPopup(item)" />
      </div>
    </section>
  </div>
</template>
