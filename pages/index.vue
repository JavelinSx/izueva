<script setup lang="ts">
// Цены из Google Таблицы: при генерации попадают в HTML, в браузере обновляются
await useLoadPrices()
</script>

<template>
  <div class="relative min-h-screen w-full">
    <SilkBackground />

    <div class="relative z-10">
      <Header />
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ResultsSection />
        <PriceSection />
        <PriceCalculator />
        <PromoSection />
        <ContactsSection />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
