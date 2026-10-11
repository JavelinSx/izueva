<template>
  <section id="promo" class="mx-auto max-w-[1240px] px-4 pb-[clamp(80px,9vw,128px)] md:px-12">
    <div class="mb-14 flex flex-col items-center gap-4 text-center">
      <SectionHeading v-animate="'fade-in-up'" eyebrow="Акции" center>
        Подарки <span class="italic text-rose">и забота</span>
      </SectionHeading>
      <p v-animate="{ animation: 'fade-in-up', delay: 100 }" class="m-0 max-w-[640px] text-lg text-mist">
        При первом посещении вы получаете памятку по уходу за волосами. А также можете приобрести
        <strong class="font-semibold text-plum">подарочный сертификат</strong> на любую сумму.
      </p>
    </div>

    <div class="mb-[clamp(48px,6vw,80px)] flex flex-wrap items-center gap-[clamp(32px,5vw,72px)]">
      <div v-animate="'fade-in-up'" class="min-w-0 flex-[1_1_480px]">
        <div class="transition-transform duration-700 md:-rotate-2 md:hover:rotate-0">
          <GiftCertificate />
        </div>
      </div>

      <div v-animate="{ animation: 'fade-in-up', delay: 150 }" class="flex flex-[1_1_320px] flex-col gap-5">
        <h3 class="m-0 font-display text-[clamp(34px,3.6vw,52px)] font-normal leading-none">
          Подарочный <span class="italic text-rose">сертификат</span>
        </h3>
        <ul class="m-0 flex list-none flex-col gap-3 p-0">
          <li class="flex items-baseline gap-3">
            <span aria-hidden="true" class="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-champagne" />
            На любую сумму
          </li>
          <li class="flex items-baseline gap-3">
            <span aria-hidden="true" class="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-champagne" />
            Действует 6 месяцев с даты выдачи
          </li>
          <li class="flex items-baseline gap-3">
            <span aria-hidden="true" class="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-champagne" />
            Оформить можно по телефону или в группе ВКонтакте
          </li>
        </ul>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="tel:89021962407"
            class="btn-lift inline-flex min-h-[52px] items-center rounded-full bg-rose px-[26px] text-[15px] font-semibold text-white no-underline">
            Заказать сертификат
          </a>
          <a href="https://vk.com/keratin_botox_plessvk" target="_blank" rel="noreferrer"
            class="btn-lift inline-flex min-h-[52px] items-center rounded-full border border-plum px-[26px] text-[15px] font-semibold text-plum no-underline hover:bg-plum hover:text-petal">
            Написать ВКонтакте
          </a>
        </div>
      </div>
    </div>

    <div v-animate="'fade-in-up'">
      <CareMemo />
    </div>
  </section>
</template>
