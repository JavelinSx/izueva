<script setup lang="ts">
const { works } = useImageSlides()

const INITIAL = 8
const showAll = ref(false)
const visible = computed(() => (showAll.value ? works : works.slice(0, INITIAL)))

const current = ref(-1)
const isOpen = computed(() => current.value >= 0)
const open = (i: number) => {
  current.value = i
}
const close = () => {
  current.value = -1
}
const prev = () => {
  current.value = (current.value + works.length - 1) % works.length
}
const next = () => {
  current.value = (current.value + 1) % works.length
}

const onKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

watch(isOpen, (value) => {
  document.documentElement.style.overflow = value ? 'hidden' : ''
})
</script>

<template>
  <section id="works" class="mx-auto max-w-[1240px] px-4 py-[clamp(72px,9vw,128px)] md:px-12">
    <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
      <SectionHeading v-animate="'fade-in-up'" eyebrow="Портфолио">
        Работы <span class="italic text-rose">мастера</span>
      </SectionHeading>
      <p v-animate="{ animation: 'fade-in-up', delay: 100 }" class="m-0 max-w-[360px] text-base text-mist">
        Гладкость, блеск и плотность — нажмите на фото, чтобы рассмотреть результат ближе.
      </p>
    </div>

    <ul class="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="(work, i) in visible" :key="work.thumb" :class="i % 2 === 1 ? 'lg:mt-14' : ''">
        <button type="button" :aria-label="`Открыть фото ${i + 1} из ${works.length}`"
          class="zoom lift block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-[22px] border-0 bg-powder p-0 sm:rounded-[30px]"
          @click="open(i)">
          <img :src="work.thumb" :alt="`Работа мастера, фото ${i + 1}`" loading="lazy" decoding="async"
            width="640" height="961" class="block h-full w-full object-cover">
        </button>
      </li>
    </ul>

    <div v-if="!showAll" class="mt-12 flex justify-center lg:mt-20">
      <button type="button"
        class="btn-lift inline-flex min-h-[52px] cursor-pointer items-center gap-2.5 rounded-full border border-plum bg-transparent px-7 text-[15px] font-semibold text-plum hover:bg-plum hover:text-petal"
        @click="showAll = true">
        Смотреть все работы · {{ works.length }}
      </button>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isOpen" role="dialog" aria-modal="true" aria-label="Просмотр фото"
          class="fixed inset-0 z-[120] flex items-center justify-center bg-plum-deep/90 p-6 backdrop-blur-md">
          <img :src="works[current].full" :alt="`Работа мастера, фото ${current + 1}`"
            class="max-h-[calc(100dvh-140px)] max-w-[min(92vw,640px)] rounded-[28px] object-contain shadow-2xl">

          <button type="button" aria-label="Закрыть"
            class="absolute right-5 top-5 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-petal/40 bg-petal/10 text-petal"
            @click="close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <button type="button" aria-label="Предыдущее фото"
            class="absolute left-3 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-petal/40 bg-petal/10 text-petal sm:left-5"
            @click="prev">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Следующее фото"
            class="absolute right-3 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-petal/40 bg-petal/10 text-petal sm:right-5"
            @click="next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <span class="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[22px] italic text-petal">
            {{ current + 1 }} / {{ works.length }}
          </span>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
