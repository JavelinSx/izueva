<script setup lang="ts">
const windowWidth = ref(0)

onMounted(() => {
  windowWidth.value = window.innerWidth

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<template>
  <div class="w-full bg-main fixed z-[100] left-0 shadow-dark">
    <Menu v-if="windowWidth >= 821" />
    <div v-else class="flex items-center justify-between">
      <div class="flex items-center pl-4">
        <h1 class="text-text font-bold text-base md:text-xl tracking-wider">SVK-Hair`s</h1>
      </div>
      <Burger />
    </div>
  </div>
</template>
