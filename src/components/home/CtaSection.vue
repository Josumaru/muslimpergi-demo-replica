<template>
    <div id="ctaSection" class=" relative dark:text-white text-black w-full flex items-center justify-center py-20">
        <img src="@/assets/images/background/bg_0.png" class="w-full h-full object-cover absolute inset-0 z-0" />

        <div class="container px-4 flex gap-2 items-center justify-center flex-col z-20">
            <div class="text-4xl lg:text-7xl text-center">
                <p class="font-title">{{ $t("cta.umrohDanHaji") }}<span class="font-title text-[#34AF5B]"> Umroh
                        Amanah</span></p>
            </div>
            <div>
                <p class="font-bold text-lg lg:text-xl font-subtitle text-center">
                    {{ $t("cta.perjalananIbadah") }} <span class="font-subtitle text-[#4D97F2]">{{ $t("cta.nyamanAman")
                        }}</span> {{ $t("cta.and") }}
                    <span class="text-[#4D97F2]">{{ $t("cta.terpercaya") }} </span> {{ $t("cta.denganBimbingan") }}
                </p>
            </div>
            <div class="flex w-full sm:items-center sm:justify-center flex-col sm:flex-row gap-5">
                <RouterLink to="/"
                    class="bg-[#34AF5B] text-center font-subtitle hover:bg-white hover:text-[#34AF5B] hover:border-2 border-2 transition-colors hover:border-[#34AF5B] borfe text-white p-3 rounded-xl">
                    {{ $t("cta.lihatPaket") }}
                    dan Haji
                </RouterLink>
                <MoreButton to="/">
                    {{ $t("cta.konsultasi") }}
                </MoreButton>
                <!-- <RouterLink to="/" class="border-2 text-black border-[#34AF5B] p-3 rounded-xl">Konsultasi Gratis
                </RouterLink> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import MoreButton from '../common/MoreButton.vue';
</script>

<style scoped>
.font-title {
    font-weight: 600;
}

.font-subtitle {
    font-weight: 500;
}
</style>
