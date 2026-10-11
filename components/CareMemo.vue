<script setup lang="ts">
const rules = [
  {
    title: 'Бальзам и маска',
    text: 'Бальзам — обязательно каждое мытьё, маска — 1–2 раза в неделю. Наносим только по длине, не на кожу головы и корни. Для лучшего результата прочешите пальцами или специальной расчёской.',
  },
  {
    title: 'Окрашивание',
    text: 'После кератинового выпрямления или ботокса окрашивание можно проводить через 10–14 дней, осветление — через 2–3 месяца.',
  },
  {
    title: 'Вода',
    text: 'Не используем горячую или холодную воду. Оптимально — вода комнатной температуры.',
  },
  {
    title: 'Сушка',
    text: 'После каждого мытья сушим волосы феном по росту волос на 100% (тёплый или холодный воздух). Желательно использовать сопло.',
  },
  {
    title: 'Защита',
    text: 'Используем термозащиту и несмываемый уход.',
  },
  {
    title: 'Утюжок и плойка',
    text: 'Используем только на полностью высушенных волосах.',
  },
  {
    title: 'Сон',
    text: 'Не ложимся спать с мокрыми волосами.',
  },
  {
    title: 'Расчёска',
    text: 'Ухаживаем за расчёской: регулярно моем и дезинфицируем.',
  },
  {
    title: 'Полотенце',
    text: 'Используем только чтобы промокнуть влагу. Не нужно растирать волосы.',
  },
  {
    title: 'Шампунь',
    text: 'Для мытья — профессиональные средства по типу кожи головы (не обязательно бессульфатные).',
  },
]
</script>

<template>
  <article class="glass rounded-[clamp(28px,4vw,44px)] p-[clamp(24px,4vw,56px)]" aria-labelledby="memo-title">
    <div class="flex flex-wrap gap-x-14 gap-y-8">
      <div class="flex flex-[1_1_300px] flex-col gap-5">
        <span class="text-xs font-bold uppercase tracking-[0.2em] text-rose">После процедуры</span>
        <h3 id="memo-title" class="m-0 font-display text-[clamp(34px,3.6vw,52px)] font-normal leading-none">
          Памятка <span class="italic text-rose">по уходу</span> за волосами
        </h3>
        <p class="m-0 text-mist">
          Рабочий состав с ваших волос смыт, поэтому можете мыть голову и продолжать уход в привычном для вас режиме.
          Конечно, соблюдая базу.
        </p>
        <div class="mt-auto hidden flex-col gap-1 border-t border-champagne/50 pt-6 md:flex">
          <span class="font-display text-2xl italic">Спасибо за доверие. Жду вас снова!</span>
          <span class="font-script text-[34px] leading-tight text-rose">Ваш мастер — Ирина Зуева</span>
        </div>
      </div>

      <ol class="m-0 grid flex-[2_1_520px] list-none grid-cols-1 gap-x-10 gap-y-6 p-0 sm:grid-cols-2">
        <li v-for="(rule, i) in rules" :key="rule.title" class="flex gap-4">
          <span class="w-8 flex-none font-display text-[26px] italic leading-none text-champagne">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <span class="flex flex-col gap-1">
            <span class="font-semibold">{{ rule.title }}</span>
            <span class="text-[15px] leading-normal text-mist">{{ rule.text }}</span>
          </span>
        </li>
      </ol>

      <div class="flex w-full flex-col gap-1 border-t border-champagne/50 pt-6 md:hidden">
        <span class="font-display text-2xl italic">Спасибо за доверие. Жду вас снова!</span>
        <span class="font-script text-[30px] leading-tight text-rose">Ваш мастер — Ирина Зуева</span>
      </div>
    </div>
  </article>
</template>
