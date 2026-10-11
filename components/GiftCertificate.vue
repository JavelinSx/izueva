<template>
  <figure class="m-0" aria-label="Подарочный сертификат">
    <div
      class="relative isolate aspect-[1.45/1] w-full overflow-hidden rounded-[28px] bg-plum text-petal shadow-photo sm:rounded-[36px]">
      <!-- Шёлковые нити -->
      <svg aria-hidden="true" viewBox="0 0 580 400" preserveAspectRatio="none" fill="none" stroke-width="1"
        class="absolute inset-0 -z-10 h-full w-full">
        <path d="M-10 300 C 120 220, 210 360, 330 280 S 520 200, 600 260" stroke="rgba(233,185,200,0.35)" />
        <path d="M-10 308 C 120 232, 210 352, 330 288 S 520 212, 600 266" stroke="rgba(233,185,200,0.25)" />
        <path d="M-10 316 C 120 244, 210 344, 330 296 S 520 224, 600 272" stroke="rgba(201,162,126,0.35)" />
        <path d="M-10 324 C 120 256, 210 336, 330 304 S 520 236, 600 278" stroke="rgba(201,162,126,0.25)" />
        <path d="M-10 292 C 120 208, 210 368, 330 272 S 520 188, 600 254" stroke="rgba(233,185,200,0.2)" />
        <path d="M-10 60 C 140 110, 260 10, 400 70 S 560 40, 600 20" stroke="rgba(201,162,126,0.2)" />
        <path d="M-10 68 C 140 118, 260 18, 400 78 S 560 48, 600 28" stroke="rgba(201,162,126,0.14)" />
      </svg>

      <!-- Атласная лента с бантом -->
      <div aria-hidden="true" class="absolute inset-y-0 right-[14%] -z-10 w-[18px] bg-gradient-to-r from-champagne/70 via-[#e3c7a8]/80 to-champagne/70" />
      <svg aria-hidden="true" viewBox="0 0 120 80" fill="none" stroke="#e3c7a8" stroke-width="2"
        class="absolute right-[calc(14%-51px)] top-[9%] h-[60px] w-[120px]">
        <path d="M60 40 C 40 10, 8 14, 14 36 C 18 52, 44 48, 60 40 Z" fill="rgba(201,162,126,0.55)" />
        <path d="M60 40 C 80 10, 112 14, 106 36 C 102 52, 76 48, 60 40 Z" fill="rgba(201,162,126,0.55)" />
        <path d="M58 42 L 44 76 M62 42 L 76 76" />
        <circle cx="60" cy="40" r="6" fill="#c9a27e" />
      </svg>

      <!-- Рамка -->
      <div aria-hidden="true" class="absolute inset-3 rounded-[20px] border border-champagne/45 sm:inset-4 sm:rounded-[26px]" />

      <div class="relative flex h-full flex-col justify-between p-[clamp(22px,4.5%,40px)]">
        <div class="flex items-start justify-between gap-4">
          <span class="font-display text-[clamp(20px,2.4vw,28px)] font-semibold leading-none">
            SVK<span class="font-medium italic text-rose-light">·Hair</span>
          </span>
        </div>

        <div class="flex flex-col gap-1 pr-[22%]">
          <span class="text-[clamp(10px,1.1vw,13px)] font-semibold uppercase tracking-[0.3em] text-champagne">Подарочный</span>
          <span class="font-display text-[clamp(40px,6vw,76px)] italic leading-[0.9]">сертификат</span>
          <span class="mt-[clamp(10px,2vw,22px)] flex items-end gap-3 text-[clamp(13px,1.4vw,16px)] text-petal/80">
            на сумму
            <span aria-hidden="true" class="mb-1 h-px flex-1 bg-champagne/60" />
          </span>
        </div>

        <div class="flex flex-col gap-1.5 pr-[24%] text-[clamp(11px,1.2vw,14px)] text-petal/80">
          <span class="font-script text-[clamp(20px,2.4vw,28px)] leading-none text-rose-light">Ирина Зуева</span>
          <span>8 902 196-24-07 · срок действия — 6 месяцев</span>
        </div>
      </div>
    </div>
  </figure>
</template>
