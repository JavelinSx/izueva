<script setup lang="ts">
const places = [
  {
    city: 'Савинский',
    address: 'ул. Октябрьская, 10, кв. 61',
    link: 'https://yandex.ru/maps/-/CDatzT89',
    map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A7e92ff7f018efc88420a12e417d9e056dafca2907018042f010017bead07673a&source=constructor',
  },
  {
    city: 'Плесецк',
    address: 'ул. Кооперативная, 4Б, ТЦ «Гарант», 3 этаж, офис 21',
    link: 'https://yandex.ru/maps/-/CDatzO6o',
    map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5e2e69dcadb54d1c1a570f9d21824c169f4f7bb613f4316a7877409ddfce32bc&source=constructor',
  },
]
</script>

<template>
  <section id="contacts" class="mx-auto max-w-[1240px] px-4 pb-[clamp(64px,8vw,112px)] md:px-12">
    <div class="mb-12 flex flex-wrap items-end justify-between gap-7">
      <div v-animate="'fade-in-up'" class="flex flex-col gap-4">
        <SectionHeading eyebrow="Контакты">
          Где <span class="italic text-rose">меня найти</span>
        </SectionHeading>
        <p class="m-0 text-lg text-mist">Я работаю в Савинском и Плесецке</p>
      </div>

      <div v-animate="{ animation: 'fade-in-up', delay: 100 }" class="flex flex-col items-start gap-3.5">
        <a href="tel:89021962407" class="font-display text-[clamp(36px,4vw,56px)] leading-none text-plum no-underline">
          8 902 196-24-07
        </a>
        <div class="flex flex-wrap gap-2.5">
          <a href="tel:89021962407"
            class="btn-lift inline-flex min-h-12 items-center rounded-full bg-rose px-6 text-[15px] font-semibold text-white no-underline">
            Позвонить
          </a>
          <a href="https://vk.com/keratin_botox_plessvk" target="_blank" rel="noreferrer"
            class="btn-lift inline-flex min-h-12 items-center rounded-full border border-plum px-6 text-[15px] font-semibold text-plum no-underline hover:bg-plum hover:text-petal">
            Группа ВКонтакте
          </a>
        </div>
      </div>
    </div>

    <ul class="m-0 grid list-none grid-cols-1 gap-7 p-0 lg:grid-cols-2">
      <li v-for="(place, i) in places" :key="place.city" v-animate="{ animation: 'fade-in-up', delay: i * 100 }">
        <article class="glass flex h-full flex-col overflow-hidden rounded-[36px]">
          <div class="flex items-start justify-between gap-5 px-[30px] py-7">
            <div class="flex flex-col gap-1.5">
              <h3 class="m-0 font-display text-4xl font-medium leading-none">{{ place.city }}</h3>
              <p class="m-0 text-base text-mist">{{ place.address }}</p>
            </div>
            <a :href="place.link" target="_blank" rel="noreferrer" :aria-label="`Открыть ${place.city} на Яндекс Картах`"
              class="btn-lift flex h-12 w-12 flex-none items-center justify-center rounded-full border border-plum text-plum hover:bg-plum hover:text-petal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          </div>
          <div class="relative aspect-[4/3] bg-powder md:aspect-[16/9]">
            <iframe :src="place.map" :title="`Карта: ${place.city}`" loading="lazy"
              class="absolute inset-0 h-full w-full border-0" />
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>
