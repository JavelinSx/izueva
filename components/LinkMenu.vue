<script setup lang="ts">
interface Props {
  text: string
  anchor: string
  animation: boolean
  offset: number
}

const props = defineProps<Props>()

const handleClick = (event: Event) => {
  event.preventDefault()
  const targetElement = document.querySelector(props.anchor)
  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: offsetTop + (props.offset || 0),
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div
    class="opacity-0 -translate-y-[400px] transition-all duration-500"
    :class="{ 'opacity-100 translate-y-0': animation }"
  >
    <a
      :href="anchor"
      @click="handleClick"
      class="block rounded-lg transition-all duration-500 text-text text-xs px-[15px] py-2
             hover:shadow-[3px_8px_8px_0px_rgba(103,99,100,0.2)] hover:bg-inherit
             md:text-sm md:w-full md:hover:bg-text-additional md:hover:text-main md:hover:shadow-dark
             lg:text-base lg:px-3 lg:py-1 lg:text-center
             xl:text-lg xl:px-4 xl:py-1"
    >
      {{ text }}
    </a>
  </div>
</template>
