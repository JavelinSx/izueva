<script setup lang="ts">
interface Props {
  link: string
  linkWrapper: string
}

defineProps<Props>()

const isOpen = ref(false)

const handleOpenVideo = () => {
  isOpen.value = true
}
</script>

<template>
  <div class="relative w-full h-full">
    <div class="w-full h-full cursor-pointer rounded-2xl" @click="handleOpenVideo">
      <iframe v-if="isOpen" :src="link" :key="link" title="Brilliance-hair"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        class="w-full h-full aspect-video rounded-2xl" />
      <div v-else class="relative w-full h-full">
        <NuxtImg :src="linkWrapper" alt="Video preview" loading="lazy" class="w-full h-full object-cover rounded-2xl" />
        <NuxtImg src="/images/YouTube_23392.png" alt="Play" loading="lazy"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </div>
</template>
