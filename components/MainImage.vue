<script setup lang="ts">
interface Props {
  imagePath: string
  alt: string
  classVariative?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="h-[180px] w-[110px] relative z-[2]
           sm:w-full sm:h-[280px] sm:max-h-none
           md:w-full md:h-[360px] md:max-h-[360px]
           lg:w-full lg:h-[320px] lg:max-h-none
           xl:w-full xl:h-[360px] xl:max-h-none"
    :class="classVariative"
  >
    <div class="relative w-full h-full shadow-card rounded-[1.1rem]">
      <NuxtImg
        :src="imagePath"
        :alt="alt"
        loading="lazy"
        class="h-full w-full object-cover rounded-2xl cursor-pointer"
      />
    </div>
  </div>
</template>
