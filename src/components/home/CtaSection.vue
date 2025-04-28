<template>
    <div class="bg-white text-black font-bold w-full flex items-center justify-center py-20">
        <div class="container flex items-center justify-center flex-col">
            <div class="text-7xl text-center font-bold">
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

<style scoped></style>
