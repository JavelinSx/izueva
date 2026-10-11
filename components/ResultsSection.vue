<script setup lang="ts">
const { sliderVideo } = useImageSlides()

// Видео загружается только после нажатия — до этого показываем обложку
const playing = ref<string | null>(null)
</script>

<template>
  <section id="results" class="mx-2 overflow-hidden rounded-[clamp(32px,4vw,56px)] bg-plum text-petal md:mx-6">
    <div class="mx-auto max-w-[1240px] px-4 py-[clamp(64px,8vw,112px)] md:px-12">
      <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading v-animate="'fade-in-up'" eyebrow="Видео" dark>
          Примеры работ <span class="italic text-rose-light">до и после</span>
        </SectionHeading>
        <p v-animate="{ animation: 'fade-in-up', delay: 100 }" class="m-0 max-w-[360px] text-base text-petal/80">
          Короткие видео с реальными результатами: как меняются волосы после процедуры.
        </p>
      </div>

      <ul class="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2">
        <li v-for="(video, i) in sliderVideo" :key="video.id" v-animate="{ animation: 'fade-in-up', delay: i * 100 }"
          class="relative aspect-[5/4.4] overflow-hidden rounded-[28px] bg-plum-deep">
          <iframe v-if="playing === video.id"
            :src="`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`"
            :title="`Результат № ${i + 1}: видео до и после`"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen class="absolute inset-0 h-full w-full border-0" />
          <button v-else type="button" :aria-label="`Смотреть видео: результат № ${i + 1}, до и после`"
            class="zoom group absolute inset-0 cursor-pointer border-0 bg-transparent p-0" @click="playing = video.id">
            <img :src="video.img" alt="" loading="lazy" decoding="async" class="block h-full w-full object-cover">
            <span aria-hidden="true"
              class="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-plum-deep/85 to-transparent" />
            <span aria-hidden="true"
              class="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-petal/90 text-plum transition-transform duration-500 group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
            </span>
            <span class="absolute inset-x-[22px] bottom-[18px] flex items-center justify-between text-sm font-semibold text-petal">
              <span class="font-display text-[26px] font-medium italic">Результат № {{ i + 1 }}</span>
              <span>Смотреть</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
