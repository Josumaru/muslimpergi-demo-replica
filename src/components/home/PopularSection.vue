<template>
  <main>
    <div class=" py-10   overflow-hidden">
      <!-- Header Section -->
      <div class="flex flex-col items-center justify-center text-center mt-10 gap-3 pb-5">
        <OvalTag bg-color="#34AF5B" text-color="#FFFFFF">
          <template #title>
            Paket Terbaik
          </template>
        </OvalTag>

        <h2 class="text-[#34AF5B] text-2xl md:text-3xl lg:text-4xl font-bold">
          Paket Umroh dan Haji Paling Populer
        </h2>

        <p class="dark:text-gray-200 text-sm w-full md:text-base  p-1">
          Momen-momen berkesan jamaah UmrohKu selama perjalanan ibadah
        </p>
      </div>

      <div class="marquee-container mt-10">
        <div class="marquee-track">
          <!-- Konten asli -->
          <template v-for="(card, index) in bestPackages" :key="`original-${index}`">
            <PopularCard :imageUrl="card.imageUrl" :title="card.title" :date="card.date" :seats="card.seats"
              :hotelStars="card.hotelStars" :departure="card.departure" :airline="card.airline" :price="card.price" />
          </template>

          <!-- Duplikat konten agar tidak habis -->
          <template v-for="(card, index) in bestPackages" :key="`duplicate-${index}`">
            <PopularCard :imageUrl="card.imageUrl" :title="card.title" :date="card.date" :seats="card.seats"
              :hotelStars="card.hotelStars" :departure="card.departure" :airline="card.airline" :price="card.price" />
          </template>
        </div>
      </div>
      <div class="w-full z-50 flex items-center justify-center py-10">
        <MoreButton to="/">
          Lihat Semua Paket
        </MoreButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import MoreButton from '@/components/common/MoreButton.vue';
import OvalTag from '../common/OvalTag.vue';
import PopularCard from '../common/PopularCard.vue';
import pic1 from '@/assets/PopularComponents/pic1.jpg';
import pic2 from '@/assets/PopularComponents/pic2.png';
import pic3 from '@/assets/PopularComponents/pic3.jpg';
import pic4 from '@/assets/PopularComponents/pic4.svg';

const images = {
  pic1,
  pic2,
  pic3,
  pic4,
}
// Untuk menampilkan dua baris

// Daftar paket terbaik (bisa di-fetch dari API nanti juga)
const bestPackages = [
  {
    title: "Ziarah Aqsha & Tour Jordan Plus Dubai",
    date: "20 - 25 April 2025",
    seats: "19/20 Available",
    hotelStars: 3,
    departure: "Jakarta",
    airline: "Emirates",
    price: "Rp. 15.000.000,00",
    imageUrl: images.pic1
  },
  {
    title: "Umroh Reguler Hemat",
    date: "1 - 10 Mei 2025",
    seats: "15/25 Available",
    hotelStars: 4,
    departure: "Jakarta",
    airline: "Saudi Airlines",
    price: "Rp. 22.000.000,00",
    imageUrl: images.pic2
  },
  {
    title: "Umroh Plus Turki",
    date: "15 - 25 Juni 2025",
    seats: "10/20 Available",
    hotelStars: 5,
    departure: "Surabaya",
    airline: "Turkish Airlines",
    price: "Rp. 30.000.000,00",
    imageUrl: images.pic3
  },
  {
    title: "Umroh Plus Turki",
    date: "15 - 25 Juni 2025",
    seats: "10/20 Available",
    hotelStars: 5,
    departure: "Surabaya",
    airline: "Turkish Airlines",
    price: "Rp. 30.000.000,00",
    imageUrl: images.pic4
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
