<template>

    <div class="bg-white relative text-black w-full flex items-center justify-center py-20">
        <img src="@/assets/images/background/bg_0.png" class="w-full h-full object-cover absolute inset-0 z-0" />

        <div class="container flex items-center justify-center flex-col z-20">
            <div class="text-7xl text-center">
                <p class="font-title">Umroh dan Haji <br>bersama<span class="font-title text-[#34AF5B]"> Umroh
                        Amanah</span></p>
            </div>
            <div>
                <p class="font-bold text-xl font-subtitle text-center">
                    Perjalanan Ibadah yang <span class="font-subtitle text-[#4D97F2]">nyaman, aman</span> dan
                    <span class="text-[#4D97F2]">terpercaya <br> </span> dengan bimbingan ustadz berpengalaman
                </p>
            </div>
            <div class="flex gap-5 pt-2">
                <RouterLink to="/"
                    class="bg-[#34AF5B] font-subtitle hover:bg-white hover:text-[#34AF5B] hover:border-2 border-2 transition-colors hover:border-[#34AF5B] borfe text-white p-3 rounded-xl">
                    Lihat paket Umrah
                    dan Haji
                </RouterLink>
                <MoreButton to="/">
                    Konsultasi Gratis
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
