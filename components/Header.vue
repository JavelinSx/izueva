<script setup lang="ts">
const links = [
  { text: 'Работы', anchor: '#works' },
  { text: 'О мастере', anchor: '#about' },
  { text: 'До и после', anchor: '#results' },
  { text: 'Цены', anchor: '#prices' },
  { text: 'Калькулятор', anchor: '#calculator' },
  { text: 'Акции', anchor: '#promo' },
  { text: 'Контакты', anchor: '#contacts' },
]

const menuOpen = ref(false)
const closeMenu = () => {
  menuOpen.value = false
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-plum/10 bg-petal/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-4 py-3.5 md:px-12">
      <a href="#top" class="flex flex-col leading-none text-plum no-underline" @click="closeMenu">
        <span class="font-display text-[30px] font-semibold tracking-[0.02em]">SVK<span
            class="font-medium italic text-rose">·Hair</span></span>
        <span class="mt-1 text-[10px] uppercase tracking-[0.32em] text-mist">Ирина Зуева</span>
      </a>

      <nav aria-label="Разделы сайта" class="hidden items-center gap-7 text-sm font-medium xl:flex">
        <a v-for="link in links" :key="link.anchor" :href="link.anchor"
          class="group relative text-plum no-underline">
          {{ link.text }}
          <span aria-hidden="true"
            class="absolute inset-x-0 -bottom-1.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
        </a>
      </nav>

      <div class="flex items-center gap-2.5">
        <a href="https://vk.com/keratin_botox_plessvk" target="_blank" rel="noreferrer"
          class="btn-lift hidden min-h-11 items-center rounded-full border border-plum px-[18px] text-sm font-semibold text-plum no-underline hover:bg-plum hover:text-petal sm:inline-flex">
          Группа ВК
        </a>
        <a href="tel:89021962407"
          class="btn-lift inline-flex min-h-11 items-center rounded-full bg-rose px-[22px] text-sm font-semibold text-white no-underline">
          Записаться
        </a>
        <button type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-plum/20 text-plum xl:hidden"
          @click="menuOpen = !menuOpen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
            stroke-linecap="round" aria-hidden="true">
            <path v-if="menuOpen" d="M6 6l12 12M18 6 6 18" />
            <path v-else d="M4 7h16M4 12h16M9 17h11" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="menuOpen" id="mobile-menu" aria-label="Меню"
        class="border-t border-plum/10 px-4 pb-6 pt-2 md:px-12 xl:hidden">
        <ul class="m-0 flex list-none flex-col p-0">
          <li v-for="link in links" :key="link.anchor">
            <a :href="link.anchor" class="block py-2 font-display text-[28px] text-plum no-underline"
              @click="closeMenu">{{ link.text }}</a>
          </li>
        </ul>
        <a href="https://vk.com/keratin_botox_plessvk" target="_blank" rel="noreferrer"
          class="mt-3 inline-flex min-h-12 items-center rounded-full border border-plum px-6 text-sm font-semibold text-plum no-underline">
          Группа ВКонтакте
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
