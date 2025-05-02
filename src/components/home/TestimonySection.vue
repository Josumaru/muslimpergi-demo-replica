<template>
    <div class="bg-white/60">
        <div class="relative">
            <!-- <img src="@/assets/images/background/bg_circle.svg"
                class="w-full h-full object-cover absolute inset-0 z-0" /> -->
            <div class="z-50 pt-10">
                <div class="flex z-20 items-center justify-center gap-4 flex-col">
                    <OvalTag bg-color="#34AF5B" text-color="#FFFFFF">
                        <template #title>
                            Galeri
                        </template>
                    </OvalTag>
                    <p class="text-[#4AA055] z-20 text-5xl font-title mt-4">Apa Kata Jamaah Kami</p>
                    <p class="text-black mt-2">Pengalaman jamaah yang telah melaksanakan ibadah umroh bersama kami</p>
                </div>
                <div class="z-20 overflow-hidden pt-5 group" @mouseover="pause = true" @mouseleave="pause = false">
                    <div class="flex flex-none gap-6 animate-marquee" :class="{ 'pause-animation': pause }">
                        <TestimonialCard v-for="(item, i) in repeatedTestimonials" :key="i" v-bind="item" />
                    </div>
                </div>
            </div>
            <div class="w-full z-50 flex items-center justify-center py-10">
                <MoreButton to="/">
                    Lihat Semua Testimoni
                </MoreButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue'
import { ref, computed } from 'vue'
import OvalTag from "@/components/common/OvalTag.vue"
import MoreButton from "@/components/common/MoreButton.vue"
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