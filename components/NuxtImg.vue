<script setup lang="ts">
// Простая замена NuxtImg для SSG режима
// Просто рендерит обычный img тег без оптимизации
defineProps<{
  src: string
  alt?: string
  loading?: 'lazy' | 'eager'
  class?: string
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :loading="loading || 'lazy'"
    :class="class"
    :width="width"
    :height="height"
  />
</template>
