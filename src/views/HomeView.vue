<script setup lang="ts">
import HeaderSection from '../components/home/HeaderSection.vue'
import CtaSection from '../components/home/CtaSection.vue'
import KeunggulanSection from '../components/home/KeunggulanSection.vue'
import PromoSection from '@/components/home/PromoSection.vue'
import PopularSection from '@/components/home/PopularSection.vue'
import GallerySection from "../components/home/GallerySection.vue"
import TestimonySection from "../components/home/TestimonySection.vue"
</script>

<template>
  <main>
    <HeaderSection />
    <CtaSection />
    <KeunggulanSection />
    <PopularSection />
    <GallerySection />
    <div class="relative flex w-full items-center justify-center">
      <img src="@/assets/images/background/bg_kabaah.png" class="w-full h-full object-cover absolute inset-0 z-0" />
      <div class="z-20 w-full">
        <TestimonySection />
        <div class="bg-[#000000]/50 w-full">
          <PromoSection />
        </div>
      </div>
    </div>
  </main>
</template>
