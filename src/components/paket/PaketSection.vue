<template>
    <main class="flex py-10 flex-col items-center justify-center">
        <div class="grid px-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 container">
            <template v-for="(card, index) in packages" :key="`original-${index}`">
                <PaketCard :imageUrl="card.imageUrl" :title="card.title" :date="card.date" :rating="card.rating"
                    :location="card.location" :group="card.group" :days="card.days" :total-reviews="card.totalReviews"
                    :price="card.price" />
            </template>

        </div>
    </main>
</template>

<script setup lang="ts">
import pic1 from '@/assets/PopularComponents/pic1.jpg';
import pic2 from '@/assets/PopularComponents/pic2.png';
import pic3 from '@/assets/PopularComponents/pic3.jpg';
import pic4 from '@/assets/PopularComponents/pic4.svg';
import PaketCard from './PaketCard.vue';

const images = {
    pic1,
    pic2,
    pic3,
    pic4,
}
// Untuk menampilkan dua baris

// Daftar paket terbaik (bisa di-fetch dari API nanti juga)
const packages = [
    {
        rating: 4.5,
        tag: "Promo Terbatas",
        totalReviews: 120,
        imageUrl: images.pic1,
        title: "Umroh Reguler Hemat",
        days: 10,
        date: "Setiap Minggu",
        location: "Madinah - Makkah",
        group: "Group Kecil(20-25 Jamaah)",
        price: "Rp. 22.000.000,00",
    },
    {
        rating: 4.8,
        tag: "Promo Terbatas",
        totalReviews: 200,
        imageUrl: images.pic2,
        title: "Umroh Reguler",
        days: 10,
        date: "Setiap Minggu",
        location: "Madinah - Makkah",
        group: "Group Kecil(20-25 Jamaah)",
        price: "Rp. 25.000.000,00",
    },
    {
        rating: 4.7,
        tag: "Promo Terbatas",
        totalReviews: 150,
        imageUrl: images.pic3,
        title: "Umroh Plus Turki",
        days: 15,
        date: "Setiap Bulan",
        location: "Madinah - Makkah - Istanbul",
        group: "Group Kecil(20-25 Jamaah)",
        price: "Rp. 30.000.000,00",
    },
    {
        rating: 4.9,
        tag: "Promo Terbatas",
        totalReviews: 300,
        imageUrl: images.pic4,
        title: "Umroh Reguler VIP",
        days: 10,
        date: "Setiap Minggu",
        location: "Madinah - Makkah",
        group: "Group Kecil(20-25 Jamaah)",
        price: "Rp. 35.000.000,00",
    },
    {
        rating: 4.9,
        tag: "Promo Terbatas",
        totalReviews: 300,
        imageUrl: images.pic4,
        title: "Umroh Reguler VIP",
        days: 10,
        date: "Setiap Minggu",
        location: "Madinah - Makkah",
        group: "Group Kecil(20-25 Jamaah)",
        price: "Rp. 35.000.000,00",
    },
    {
        rating: 4.9,
        tag: "Promo Terbatas",
        totalReviews: 300,
        imageUrl: images.pic4,
        title: "Umroh Reguler VIP",
        days: 10,
        date: "Setiap Minggu",
        location: "Madinah - Makkah",
        group: "Group Kecil(20-25 Jamaah)",
        price: "Rp. 35.000.000,00",
    },

];
</script>
<style scoped>
@keyframes scrollLeft {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

.marquee-container {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
}

.marquee-track {
    display: flex;
    width: max-content;
    animation: scrollLeft 30s linear infinite;
    gap: 1.5rem;
}

.marquee-container:hover .marquee-track {
    animation-play-state: paused;
}
</style>
