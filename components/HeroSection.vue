<script setup lang="ts">
const facts = [
  { value: '3–6 мес.', label: 'держится кератиновое выпрямление' },
  { value: 'Бесплатно', label: 'подравнивание кончиков к процедуре' },
  { value: 'Премиум', label: 'оригинальные профессиональные составы' },
]

const marquee = [
  'Кератиновое выпрямление',
  'Ботокс',
  'Холодное восстановление',
  'SPA-уход',
  'Полировка',
  'Коллагеновое обёртывание',
  'Тотальное восстановление',
]
</script>

<template>
  <section id="top" class="mx-auto flex max-w-[1240px] flex-wrap items-center gap-[clamp(40px,5vw,72px)] px-4 pb-14 pt-[clamp(40px,6vw,88px)] md:px-12">
    <div class="flex min-w-0 flex-[1_1_520px] animate-rise flex-col gap-7">
      <div class="flex items-center gap-3.5 text-xs font-semibold uppercase tracking-[0.26em] text-rose">
        <span aria-hidden="true" class="h-px w-11 bg-champagne" />
        <span>Студия восстановления волос</span>
      </div>

      <h1 class="m-0 font-display text-[clamp(46px,6vw,92px)] font-medium leading-[0.95] tracking-[-0.01em]">
        <span class="whitespace-nowrap">Твои волосы —</span><br><span class="italic text-rose">твоё богатство</span>
      </h1>

      <p class="m-0 max-w-[540px] text-lg leading-[1.7] text-mist">
        Я — Ирина Зуева, сертифицированный мастер по реконструкции и восстановлению волос. Подберу процедуру именно
        для твоих волос: кератин, ботокс, холодное восстановление и SPA-уход на премиум-составах.
      </p>

      <div class="flex flex-wrap gap-3.5">
        <a href="tel:89021962407"
          class="btn-lift inline-flex min-h-14 items-center gap-3 rounded-full bg-rose px-[30px] text-base font-semibold text-white no-underline">
          Записаться
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <a href="#prices"
          class="btn-lift inline-flex min-h-14 items-center rounded-full border border-plum px-[30px] text-base font-semibold text-plum no-underline hover:bg-plum hover:text-petal">
          Смотреть цены
        </a>
      </div>

      <dl class="m-0 grid max-w-[580px] grid-cols-3 gap-3 border-t border-plum/10 pt-7 sm:gap-5">
        <div v-for="fact in facts" :key="fact.value" class="flex min-w-0 flex-col-reverse gap-1">
          <dt class="hyphens-auto text-xs leading-snug text-mist sm:text-[13px]">{{ fact.label }}</dt>
          <dd class="m-0 font-display text-[clamp(22px,3vw,34px)] font-medium leading-none">{{ fact.value }}</dd>
        </div>
      </dl>
    </div>

    <div class="flex flex-[1_1_360px] justify-center py-6 pl-6 sm:pl-10">
      <div class="relative aspect-[3/4] w-[min(100%,440px)]">
        <div aria-hidden="true" class="arch absolute inset-[-20px_20px_20px_-20px] border border-champagne" />
        <img src="/images/master/master-hero.webp" alt="Мастер Ирина Зуева" width="900" height="1351"
          fetchpriority="high"
          class="arch absolute inset-0 h-full w-full object-cover object-[50%_28%] shadow-photo">

        <div aria-hidden="true"
          class="absolute -left-10 bottom-[72px] h-[112px] w-[112px] rounded-full bg-petal shadow-soft sm:-left-16 sm:h-[140px] sm:w-[140px]">
          <svg viewBox="0 0 200 200" class="absolute inset-0 h-full w-full animate-spin-slow">
            <defs>
              <path id="hero-ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
            </defs>
            <text fill="#3a2333" font-size="14" font-weight="600" letter-spacing="3"
              style="text-transform: uppercase; font-family: var(--font-sans)">
              <textPath href="#hero-ring" textLength="458">восстановление волос · svk hair ·</textPath>
            </text>
          </svg>
          <svg viewBox="0 0 24 24" class="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2"
            fill="none" stroke="#9e5574" stroke-width="1.2" stroke-linejoin="round">
            <path d="M12 2c.6 4.8 2.2 6.4 7 7-4.8.6-6.4 2.2-7 7-.6-4.8-2.2-6.4-7-7 4.8-.6 6.4-2.2 7-7z" />
          </svg>
        </div>

        <div
          class="absolute -bottom-4 -right-2 flex animate-float flex-col gap-0.5 rounded-[20px] bg-white/85 px-5 py-4 shadow-soft backdrop-blur sm:-right-7">
          <span class="font-display text-[22px] font-semibold leading-tight">Мастер Ирина Зуева</span>
          <span class="text-[13px] text-mist">сертифицированный мастер</span>
        </div>
      </div>
    </div>
  </section>

  <div aria-hidden="true" class="overflow-hidden border-y border-plum/10 bg-white/40 py-[18px]">
    <div class="flex w-max animate-marquee items-center gap-10 whitespace-nowrap font-display text-[30px] italic">
      <template v-for="copy in 2" :key="copy">
        <template v-for="item in marquee" :key="`${copy}-${item}`">
          <span>{{ item }}</span>
          <span class="h-[7px] w-[7px] rotate-45 bg-champagne" />
        </template>
      </template>
    </div>
  </div>
</template>
