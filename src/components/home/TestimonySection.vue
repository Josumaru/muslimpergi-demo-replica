<template>
    <div class="bg-white/60 pt-20 relative">
        <img src="@/assets/images/background/bg_circle.svg" class="w-full h-full object-cover absolute inset-0 z-0" />
        <div class="flex items-center justify-center gap-4 flex-col">
            <OvalTag>
                <template #title>
                    Galeri
                </template>
            </OvalTag>
            <p class="text-[#4AA055] text-5xl font-title mt-4">Galeri Perjalanan dan Destinasi Tujuan</p>
            <p class="text-black mt-2">Momen-momen berkesan jamaah UmrohKu selama perjalanan Ibadah</p>
        </div>
        <div class="overflow-hidden pt-5 group" @mouseover="pause = true" @mouseleave="pause = false">
            <div class="flex flex-none gap-6 animate-marquee" :class="{ 'pause-animation': pause }">
                <TestimonialCard v-for="(item, i) in repeatedTestimonials" :key="i" v-bind="item" />
            </div>
        </div>
        <div class="w-full flex items-center justify-center py-10">
            <RouterLink class="text-black border-[3px] font-bold border-[#4AA055] rounded-lg p-2">Lihat Semua Testimoni
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue'
import { ref, computed } from 'vue'
import { RouterLink } from "vue-router"
// Hover state
const pause = ref(false)

// Data testimonial
const testimonials = [
    {
        rating: 5,
        text: "Makanan yang disediakan juga enak dan halal. Hotel sangat nyaman dan dekat dengan Masjidil Haram. Terima kasih UmrohKu telah membantu saya menunaikan ibadah dengan khusyuk. Sangat direkomendasikan!",
        name: "Hadi Santoso",
        location: "Bandung, Umroh Ramadhan"
    },
    {
        rating: 4,
        text: "Makanan yang disediakan juga enak dan halal. Hotel sangat nyaman dan dekat dengan Masjidil Haram. Terima kasih UmrohKu telah membantu saya menunaikan ibadah dengan khusyuk. Sangat direkomendasikan!",
        name: "Siti Nurhaliza",
        location: "Jakarta, Umroh Akhir Tahun"
    },
    {
        rating: 5,
        text: "Makanan yang disediakan juga enak dan halal. Hotel sangat nyaman dan dekat dengan Masjidil Haram. Terima kasih UmrohKu telah membantu saya menunaikan ibadah dengan khusyuk. Sangat direkomendasikan!",
        name: "Ahmad Fauzi",
        location: "Surabaya, Umroh Syawal"
    }
]

// Gandakan list agar terus muter
const repeatedTestimonials = computed(() => [...testimonials, ...testimonials])
</script>

<style scoped>
@keyframes marquee {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 30s linear infinite;
}

.pause-animation {
    animation-play-state: paused;
}
</style>