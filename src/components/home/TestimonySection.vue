<template>
    <div class="bg-white/60">
        <div class="relative">
            <!-- <img src="@/assets/images/background/bg_circle.svg"
                class="w-full h-full object-cover absolute inset-0 z-0" /> -->
            <div class="z-50 pt-10">
                <div class="flex z-20 items-center justify-center gap-4 flex-col">
                    <OvalTag bg-color="#34AF5B" text-color="#FFFFFF">
                        <template #title>
                            Testimony
                        </template>
                    </OvalTag>
                    <p class="text-[#4AA055] text-center z-20 text-5xl font-title mt-4">Apa Kata Jamaah Kami</p>
                    <p class="text-black mt-2 text-center">Pengalaman jamaah yang telah melaksanakan ibadah umroh
                        bersama kami</p>
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

const pause = ref(false)

// Data testimonial
const testimonials = [
    {
        rating: 5,
        text: "Pelayanan sangat ramah, dari keberangkatan hingga kembali ke tanah air. Lokasi hotel sangat strategis dan dekat dengan Masjidil Haram.",
        name: "Nur Aisyah",
        location: "Depok, Umroh Plus Thaif"
    },
    {
        rating: 4,
        text: "Saya sangat puas dengan perjalanan umroh kali ini. Tour guide sangat informatif dan membantu jamaah yang baru pertama kali berangkat.",
        name: "Bambang Triyono",
        location: "Semarang, Umroh Reguler"
    },
    {
        rating: 5,
        text: "Pengalaman yang luar biasa! Semua fasilitas sesuai dengan yang dijanjikan. Terima kasih UmrohKu, insyaAllah akan berangkat lagi bersama keluarga.",
        name: "Lilis Marlina",
        location: "Bekasi, Umroh Keluarga"
    },
    {
        rating: 5,
        text: "Layanan sangat memuaskan. Hotel bersih dan makanan selalu tersedia dengan rasa yang lezat. Saya sangat merekomendasikan UmrohKu!",
        name: "Rizky Hidayat",
        location: "Yogyakarta, Umroh Akhir Tahun"
    },
    {
        rating: 4,
        text: "Umroh bersama UmrohKu sangat terorganisir dengan baik. Tim selalu sigap membantu jamaah, terutama lansia.",
        name: "Yusuf Maulana",
        location: "Medan, Umroh Lansia"
    },
    {
        rating: 5,
        text: "Paket haji yang ditawarkan sangat lengkap dan memudahkan proses ibadah. Petugasnya ramah dan berpengalaman.",
        name: "Fatimah Zahra",
        location: "Padang, Haji Plus"
    },
    {
        rating: 5,
        text: "Sungguh perjalanan spiritual yang luar biasa. Semua berjalan lancar berkat koordinasi tim yang sangat profesional.",
        name: "Dian Prasetyo",
        location: "Bogor, Umroh Syawal"
    },
    {
        rating: 4,
        text: "Hotel nyaman, transportasi lancar, dan jadwal ibadah sangat teratur. Terima kasih UmrohKu atas bimbingannya.",
        name: "Rina Anggraeni",
        location: "Tangerang, Umroh Ramadhan"
    },
    {
        rating: 5,
        text: "Bimbingan selama manasik sangat membantu, sehingga saat di tanah suci ibadah lebih tenang dan khusyuk.",
        name: "Fajar Nugroho",
        location: "Solo, Haji Reguler"
    },
    {
        rating: 5,
        text: "Saya dan istri merasa sangat terbantu dan nyaman. Semoga bisa kembali lagi bersama UmrohKu.",
        name: "Hendra Wijaya",
        location: "Malang, Umroh Couple"
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