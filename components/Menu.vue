<script setup lang="ts">
const showAnimation = ref(false)
const windowWidth = ref(0)
const offset = ref(-120)

onMounted(() => {
  showAnimation.value = true
  windowWidth.value = window.innerWidth
  
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
  }
  
  window.addEventListener('resize', updateWindowWidth)
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth)
  })
})

watch(windowWidth, (newWidth) => {
  if (newWidth < 767) {
    offset.value = 1
  }
})
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-[25px] md:p-2.5 md:gap-2.5 xl:p-5">
    <LinkMenu text="О СТУДИИ" anchor="#studio-section" :offset="offset" :animation="showAnimation" />
    <LinkMenu text="ОБЗОР РАБОТ" anchor="#view-section" :offset="offset" :animation="showAnimation" />
    <LinkMenu text="О МАСТЕРЕ" anchor="#master-section" :offset="offset" :animation="showAnimation" />
    <LinkMenu text="ПРАЙС" anchor="#price-section" :offset="offset" :animation="showAnimation" />
    <LinkMenu text="КАЛЬКУЛЯТОР" anchor="#calculator-section" :offset="offset" :animation="showAnimation" />
    <LinkMenu text="АКЦИИ" anchor="#action-section" :offset="offset" :animation="showAnimation" />
    <LinkMenu text="КОНТАКТЫ" anchor="#contact-section" :offset="offset" :animation="showAnimation" />
    <button class="max-w-[200px] bg-inherit animate-scale-button text-text text-sm md:text-base lg:text-lg border border-text rounded-2xl p-[5px] w-[150px] transition-all duration-300 z-[1] hover:bg-text-additional hover:text-main md:w-[125px] md:ml-5 xl:ml-5">
      <a href="https://vk.com/keratin_botox_plessvk" target="_blank" rel="noreferrer">
        Группа в VK
      </a>
    </button>
  </div>
</template>
