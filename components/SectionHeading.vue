<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  center?: boolean
  dark?: boolean
}>(), {
  center: false,
  dark: false,
})
</script>

<template>
  <div class="flex flex-col gap-3.5" :class="center ? 'items-center text-center' : 'items-start'">
    <div class="flex items-center gap-3.5 text-xs font-semibold uppercase tracking-[0.26em]"
      :class="dark ? 'text-rose-light' : 'text-rose'">
      <span aria-hidden="true" class="h-px w-11 bg-champagne" />
      <span>{{ eyebrow }}</span>
      <span v-if="center" aria-hidden="true" class="h-px w-11 bg-champagne" />
    </div>
    <h2 class="m-0 font-display text-[clamp(42px,5vw,72px)] font-normal leading-none">
      <slot />
    </h2>
  </div>
</template>
