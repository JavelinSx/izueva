<script setup lang="ts">
interface Props {
  text: string
  anchor: string
  offset: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

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
  emit('close')
}
</script>

<template>
  <a
    :href="anchor"
    @click="handleClick"
    class="block w-full text-left py-3 px-6 rounded-xl bg-gradient-to-r from-transparent to-transparent text-text text-sm md:text-base font-medium transition-all duration-300 hover:from-button/20 hover:to-button/10 hover:text-text hover:pl-8 hover:shadow-sm active:scale-[0.98] border border-transparent hover:border-button/20"
  >
    <span class="flex items-center gap-2">
      <span class="w-1.5 h-1.5 rounded-full bg-button opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {{ text }}
    </span>
  </a>
</template>

<style scoped>
a:hover span span {
  opacity: 1;
}
</style>
