<script setup lang="ts">
const services = useServices()
const listed = computed(() => services.value.filter(s => s.inList))

const openedName = ref<string | null>(null)
const opened = computed(() => services.value.find(s => s.name === openedName.value) ?? null)
</script>

<template>
  <section id="prices" class="mx-auto max-w-[1240px] px-4 pb-[clamp(64px,7vw,96px)] pt-[clamp(80px,9vw,128px)] md:px-12">
    <div class="mb-14 flex flex-col items-center gap-4 text-center">
      <SectionHeading v-animate="'fade-in-up'" eyebrow="Прайс" center>
        Услуги <span class="italic text-rose">и цены</span>
      </SectionHeading>
      <p v-animate="{ animation: 'fade-in-up', delay: 100 }" class="m-0 max-w-[560px] text-mist">
        Процедуры по восстановлению волос. Нажмите «Подробнее», чтобы узнать состав процедуры и цену для вашей длины.
      </p>
    </div>

    <ul class="m-0 grid list-none grid-cols-1 gap-7 p-0 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(service, i) in listed" :key="service.name" v-animate="{ animation: 'fade-in-up', delay: (i % 3) * 100 }">
        <article class="glass lift flex h-full flex-col rounded-[36px] px-3.5 pb-6 pt-3.5">
          <div class="zoom relative aspect-[1/0.92] overflow-hidden bg-powder [border-radius:50%_50%_22px_22px/40%_40%_22px_22px]">
            <img :src="service.img" :alt="service.title" loading="lazy" decoding="async"
              class="block h-full w-full object-cover">
            <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span v-if="service.content?.effect"
                class="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-plum">
                {{ service.content.effect }}
              </span>
              <span v-if="service.comboDiscount"
                class="rounded-full bg-rose px-3.5 py-1.5 text-xs font-semibold text-white">
                −{{ service.comboDiscount }}% в комплексе
              </span>
            </div>
          </div>

          <div class="flex flex-1 flex-col gap-2.5 px-2.5 pt-[22px]">
            <span class="font-display text-lg italic text-rose">№ {{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="m-0 font-display text-[32px] font-medium leading-[1.05]">{{ service.title }}</h3>
            <p v-if="service.content?.lead" class="m-0 text-[15px] leading-normal text-mist">{{ service.content.lead }}</p>
            <div class="mt-auto flex items-center justify-between gap-3 border-t border-plum/10 pt-[18px]">
              <span class="text-lg font-bold">{{ service.priceText }}</span>
              <button type="button"
                class="btn-lift inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-plum bg-transparent px-[18px] text-sm font-semibold text-plum hover:bg-plum hover:text-petal"
                @click="openedName = service.name">
                Подробнее
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </article>
      </li>
    </ul>

    <PricePopup v-if="opened" :service="opened" @close="openedName = null" />
  </section>
</template>
