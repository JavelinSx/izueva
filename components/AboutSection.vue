<script setup lang="ts">
const features = [
  {
    text: 'Сертифицированный мастер',
    icon: ['M12 4a5 5 0 1 0 0 10 5 5 0 1 0 0-10z', 'M9 13.5 8 21l4-2 4 2-1-7.5'],
  },
  {
    text: 'Постоянное обучение',
    icon: ['M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5z', 'M12 6v13.5'],
  },
  {
    text: 'Премиум-составы',
    icon: ['M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z', 'M9.5 15a2.5 2.5 0 0 0 2.5 2.5'],
  },
  {
    text: 'Индивидуальный подход',
    icon: ['M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'],
  },
]
</script>

<template>
  <section id="about" class="mx-auto max-w-[1240px] px-4 pb-[clamp(80px,9vw,128px)] md:px-12">
    <div
      class="glass flex flex-wrap items-center gap-[clamp(32px,5vw,80px)] rounded-[clamp(28px,4vw,44px)] p-[clamp(20px,4vw,56px)]">
      <div v-animate="'fade-in-up'" class="flex flex-[1_1_320px] justify-center">
        <div class="relative aspect-[4/5.4] w-[min(100%,420px)]">
          <img src="/images/master/master-studio.webp" alt="Ирина Зуева в своей студии" loading="lazy"
            decoding="async" width="840" height="1493"
            class="arch absolute inset-0 h-full w-full object-cover object-[50%_40%]">
          <div aria-hidden="true" class="arch absolute inset-3.5 border border-white/70" />
        </div>
      </div>

      <div class="flex min-w-0 flex-[1_1_460px] flex-col gap-5">
        <SectionHeading v-animate="'fade-in-up'" eyebrow="О мастере">
          Давайте <span class="italic text-rose">познакомимся</span>
        </SectionHeading>

        <div v-animate="{ animation: 'fade-in-up', delay: 100 }" class="flex flex-col gap-4">
          <p class="m-0 text-lg">Меня зовут Ирина. Приглашаю в мир красивых волос.</p>
          <p class="m-0 text-mist">
            Я сертифицированный мастер по реконструкции и восстановлению волос. После обучения постоянно повышаю
            квалификацию, совершенствую навыки и осваиваю новые техники работы.
          </p>
          <p class="m-0 text-mist">
            В моей студии комфортно и уютно. Работаю на оригинальных составах премиум-класса. У меня индивидуальный
            подход — я подберу процедуру именно для твоих волос и учту все пожелания.
          </p>
        </div>

        <ul v-animate="{ animation: 'fade-in-up', delay: 200 }"
          class="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-4 p-0 py-2 sm:grid-cols-2">
          <li v-for="item in features" :key="item.text" class="flex items-center gap-3 text-[15px] font-semibold">
            <span class="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full bg-powder text-rose">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path v-for="d in item.icon" :key="d" :d="d" />
              </svg>
            </span>
            {{ item.text }}
          </li>
        </ul>

        <blockquote v-animate="{ animation: 'fade-in-up', delay: 300 }"
          class="m-0 mt-1.5 border-t border-champagne/50 pt-[22px] font-display text-[clamp(24px,2.4vw,32px)] italic leading-tight">
          «Я знаю, твои волосы — твоё богатство. Жду тебя в гости за красивыми волосами!»
        </blockquote>
        <p class="m-0 font-script text-[40px] leading-none text-rose">Ирина Зуева</p>
      </div>
    </div>
  </section>
</template>
