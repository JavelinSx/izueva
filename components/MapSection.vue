<script setup lang="ts">
// No logic needed - just template
</script>

<template>
  <div class="w-full bg-main">
    <section id="contact-section" class="p-[25px] pt-10 pb-10 max-w-[1024px] mx-auto
             md:w-full md:p-[70px]
             lg:w-[70%] lg:p-[70px]
             xl:max-w-[1280px] xl:w-[60%] xl:p-[70px]">
      <!-- Заголовок секции -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-text text-center mb-5">
          Контакты
        </h2>
        <p class="text-sm md:text-base lg:text-lg xl:text-xl text-text text-center leading-relaxed mb-3">
          Я работаю в Савинске и Плесецке
        </p>
        <p class="text-sm md:text-base lg:text-lg xl:text-xl text-text text-center leading-relaxed">
          Телефон:
          <a href="tel:89021962407"
            class="text-primary hover:text-button transition-colors duration-300 font-semibold underline decoration-2 underline-offset-2">
            8 902 196-24-07
          </a>
        </p>
      </div>

      <!-- Контейнер для карт -->
      <div class="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        <!-- Савинск - Единая карточка -->
        <div
          class="bg-secondary rounded-2xl shadow-card border border-text/5 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <!-- Заголовок карточки -->
          <div class="p-5 md:p-6 border-b border-text/10 min-h-[130px]">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1">
                <h3 class="text-lg md:text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"
                    class="flex-shrink-0">
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Савинский
                </h3>
                <p class="text-sm md:text-base text-text">ул. Октябрьская 10, кв.61</p>
              </div>
              <a href="https://yandex.ru/maps/-/CDatzT89" target="_blank" rel="noreferrer"
                class="flex-shrink-0 bg-gradient-to-r from-button/80 to-button/60 text-text text-sm font-medium border border-button/30 rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:from-button hover:to-button/80 hover:scale-105 active:scale-95"
                aria-label="Открыть карту Савинского">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                  <path fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Карта -->
          <div class="relative w-full bg-main">
            <div class="aspect-[4/3] md:aspect-video">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e92ff7f018efc88420a12e417d9e056dafca2907018042f010017bead07673a&amp;source=constructor"
                width="100%" height="100%" frameborder="0" class="absolute inset-0 w-full h-full" loading="lazy"
                title="Карта студии в Савинском"></iframe>
            </div>
          </div>
        </div>

        <!-- Плесецк - Единая карточка -->
        <div
          class="bg-secondary rounded-2xl shadow-card border border-text/5 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <!-- Заголовок карточки -->
          <div class="p-5 md:p-6 border-b border-text/10 min-h-[130px] ">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1">
                <h3 class="text-lg md:text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"
                    class="flex-shrink-0">
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Плесецк
                </h3>
                <p class="text-sm md:text-base text-text">ул. Кооперативная, 4Б, ТЦ 'ГАРАНТ', 3 этаж, офис 21</p>
              </div>
              <a href="https://yandex.ru/maps/-/CDatzO6o" target="_blank" rel="noreferrer"
                class="flex-shrink-0 bg-gradient-to-r from-button/80 to-button/60 text-text text-sm font-medium border border-button/30 rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:from-button hover:to-button/80 hover:scale-105 active:scale-95"
                aria-label="Открыть карту Плесецка">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                  <path fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Карта -->
          <div class="relative w-full bg-main">
            <div class="aspect-[4/3] md:aspect-video">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A5e2e69dcadb54d1c1a570f9d21824c169f4f7bb613f4316a7877409ddfce32bc&amp;source=constructor"
                width="100%" height="100%" frameborder="0" class="absolute inset-0 w-full h-full" loading="lazy"
                title="Карта студии в Плесецке"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
