<script setup lang="ts">
const { masterImgPath, sliderWork } = useImageSlides()

// Debug
onMounted(() => {
  console.log('MainSectionAbout mounted', { sliderWork: sliderWork.length })
})
</script>

<template>
  <div class="w-full bg-secondary flex justify-center">
    <section id="master-section"
      class="grid grid-cols-3 grid-rows-auto col-start-1 col-end-4 gap-[15px] p-[25px] pt-10 pb-10 max-w-[1024px]
             md:p-[150px] md:pt-[50px] md:pb-[50px]
             lg:box-border lg:grid lg:justify-items-start lg:items-center lg:grid-cols-[repeat(6,auto)] lg:grid-rows-[repeat(2,auto)] lg:col-start-1 lg:col-end-7 lg:gap-[23px] lg:w-full lg:p-[70px] lg:max-w-[1024px]
             xl:grid xl:justify-items-center xl:items-center xl:grid-cols-[repeat(6,auto)] xl:grid-rows-[repeat(2,auto)] xl:col-start-1 xl:col-end-7 xl:gap-[30px] xl:w-full xl:p-[70px] xl:max-w-[1280px]">
      <NuxtImg :src="masterImgPath" alt="Мастер Ирина" class="col-start-1 col-end-3 w-full justify-self-center rounded-2xl object-cover shadow-card
               lg:max-h-[500px] lg:max-w-[650px] lg:row-start-2 lg:col-start-4 lg:col-end-7
               xl:max-h-[500px] xl:max-w-[650px] xl:row-start-2 xl:col-start-4 xl:col-end-7" />

      <h2 class="text-text w-[100px] text-xl md:text-2xl lg:text-3xl xl:text-4xl self-center justify-self-center text-center
               md:w-[140px]
               lg:w-[210px] lg:col-start-4 lg:col-end-7 lg:row-start-1
               xl:w-[210px] xl:col-start-4 xl:col-end-7 xl:row-start-1">
        Мастер Ирина Зуева
      </h2>

      <div class="text-sm md:text-base lg:text-lg xl:text-xl text-text col-start-1 col-end-4 leading-relaxed
               md:justify-self-start md:text-left md:leading-relaxed
               lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-3 lg:leading-relaxed
               xl:col-start-1 xl:col-end-4 xl:row-start-2 xl:row-end-3 xl:w-[700px] xl:leading-relaxed">
        <p class="mb-3">
          <strong class="text-primary">Давайте познакомимся!</strong> Меня зовут Ирина. Приглашаю в мир красивых волос.
        </p>
        <p class="mb-3">
          Я являюсь сертифицированным мастером по реконструкции и восстановлению волос. После обучения постоянно повышаю
          свою квалификацию, совершенствую навыки и осваиваю новые техники работы.
        </p>
        <p class="mb-3">
          В моей студии комфортно и уютно. Работаю на оригинальных составах премиум класса. У меня индивидуальный подход
          - я подберу процедуру именно для твоих волос, учту все пожелания.
        </p>
        <p class="text-primary font-medium">
          Я знаю, твои волосы - твоё богатство. Жду тебя в гости за красивыми волосами!
        </p>
      </div>

      <WorksCarousel />
    </section>
  </div>
</template>
