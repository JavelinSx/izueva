<script setup lang="ts">
const showAnimated = ref(false)

const handleBurgerClose = () => {
  showAnimated.value = false
}
</script>

<template>
  <div>
    <!-- Backdrop -->
    <Transition name="fade">
      <div
        v-if="showAnimated"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98]"
        @click="handleBurgerClose"
      />
    </Transition>

    <!-- Burger Button -->
    <nav class="flex flex-row-reverse p-2 relative z-[99]">
      <div class="flex justify-end">
        <button
          type="button"
          class="w-12 h-12 transition-all duration-300 border-2 rounded-xl z-[99] flex items-center justify-center group"
          :class="showAnimated
            ? 'border-text-additional bg-text/5 shadow-lg'
            : 'border-text/30 hover:border-text hover:bg-text/5 hover:shadow-md'"
          @click="showAnimated = !showAnimated"
        >
          <div class="w-[28px] h-[20px] relative transition-all duration-500">
            <span
              class="block absolute h-[3px] w-full rounded-full left-0 bg-text transition-all duration-300"
              :class="showAnimated ? 'top-[8px] rotate-45' : 'top-0'"
            />
            <span
              class="block absolute h-[3px] w-full rounded-full left-0 bg-text transition-all duration-300 top-[8px]"
              :class="showAnimated ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
            />
            <span
              class="block absolute h-[3px] w-full rounded-full left-0 bg-text transition-all duration-300"
              :class="showAnimated ? 'top-[8px] -rotate-45' : 'top-[16px]'"
            />
          </div>
        </button>
      </div>
    </nav>

    <!-- Slide-out Menu -->
    <Transition name="slide">
      <div
        v-if="showAnimated"
        class="fixed top-0 left-0 right-0 bg-main backdrop-blur-md shadow-2xl z-[98] border-b-2 border-text/10 pt-[60px]"
      >
        <div class="max-w-md mx-auto">
          <ul class="flex flex-col items-stretch gap-1 p-4">
            <li
              v-for="(item, index) in [
                { text: 'О СТУДИИ', anchor: '#studio-section' },
                { text: 'ОБЗОР РАБОТ', anchor: '#view-section' },
                { text: 'ПРАЙС', anchor: '#price-section' },
                { text: 'АКЦИИ', anchor: '#action-section' },
                { text: 'КАЛЬКУЛЯТОР', anchor: '#calculator-section' },
                { text: 'КОНТАКТЫ', anchor: '#contact-section' },
              ]"
              :key="index"
              class="opacity-0 animate-slide-in-right"
              :style="{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }"
            >
              <LinkBurger :text="item.text" :anchor="item.anchor" :offset="-50" @close="handleBurgerClose" />
            </li>
            <li
              class="mt-4 opacity-0 animate-slide-in-right"
              :style="{ animationDelay: '0.48s', animationFillMode: 'forwards' }"
            >
              <button class="w-full bg-gradient-to-r from-button/80 to-button/60 text-text text-base md:text-lg font-semibold rounded-xl py-3 px-6 transition-all duration-300 shadow-md hover:shadow-xl hover:from-button hover:to-button/80 hover:scale-[1.02] active:scale-[0.98]">
                <a href="https://vk.com/keratin_botox_plessvk" target="_blank" rel="noreferrer" class="block">
                  Группа в VK
                </a>
              </button>
            </li>
          </ul>
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

.slide-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
