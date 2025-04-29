<template>

    <div class="bg-white relative text-black w-full flex items-center justify-center py-20">
        <img src="@/assets/images/background/bg_0.png" class="w-full h-full object-cover absolute inset-0 z-0" />

        <div class="container flex items-center justify-center flex-col z-20">
            <div class="text-7xl text-center font-title">
                <p>Umroh dan Haji <br>bersama<span class="text-[#34AF5B]"> Umroh Amanah</span></p>
            </div>
            <div>
                <p class="font-bold text-xl text-center">
                    Perjalanan Ibadah yang <span class="text-[#4D97F2]">nyaman, aman</span> dan
                    <span class="text-[#4D97F2]">terpercaya <br> </span> dengan bimbingan ustadz berpengalaman
                </p>
            </div>
            <div class="flex gap-5 pt-2">
                <RouterLink to="/" class="bg-[#34AF5B] text-white p-3 rounded-xl">Lihat paket Umrah dan Haji
                </RouterLink>
                <RouterLink to="/" class="border-2 text-black border-[#34AF5B] p-3 rounded-xl">Konsultasi Gratis
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router" 
</script>

<style scoped>
.font-title {
    font-weight: 900;
}
</style>
