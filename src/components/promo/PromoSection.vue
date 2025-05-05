<template>
  <main class="py-10">
    <div class="flex flex-col items-center justify-center">
    <div class="container mx-auto px-4 ">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <PromoCard
          v-for="(card, index) in packages"
          :key="`promo-${index}`"
          :imageUrl="card.imageUrl"
          :title="card.title"
          :description="card.description"
          :discount="card.discount"
          :duration="card.duration"
          :promoCode="card.promoCode"
        />
      </div>
    </div>
  </div>
  </main>
</template>


<script setup lang="ts">
import pic1 from '@/assets/PopularComponents/pic1.jpg';
import pic2 from '@/assets/PopularComponents/pic2.png';
import pic3 from '@/assets/PopularComponents/pic3.jpg';
import pic4 from '@/assets/PopularComponents/pic4.svg';
import PromoCard  from './PromoCard.vue';

const images = {
  pic1,
  pic2,
  pic3,
  pic4,
}
// Untuk menampilkan dua baris

const packages = [
  {
    imageUrl: images.pic1,
    title: 'Paket Keluarga',
    description: 'Diskon spesial untuk keluarga dengan minimal 4 orang.',
    discount: 25,
    duration: 'Hingga Sepanjang Tahun',
    promoCode: 'FAMILY10',
  },
  {
    imageUrl: images.pic2,
    title: 'Paket Ramadhan',
    description: 'Nikmati suasana Ramadhan di Tanah Suci dengan kenyamanan maksimal.',
    discount: 20,
    duration: 'Maret - April',
    promoCode: 'RAMADHAN20',
  },
  {
    imageUrl: images.pic3,
    title: 'Paket Reguler',
    description: 'Paket hemat dengan fasilitas standar untuk perjalanan spiritual Anda.',
    discount: 15,
    duration: 'Setiap Bulan',
    promoCode: 'REGULER15',
  },
  {
    imageUrl: images.pic4,
    title: 'Paket VIP',
    description: 'Layanan eksklusif dengan fasilitas premium dan hotel bintang lima.',
    discount: 10,
    duration: 'Sepanjang Tahun',
    promoCode: 'VIP10',
  },
  {
    imageUrl: images.pic1,
    title: 'Paket Pelajar',
    description: 'Paket khusus pelajar dengan harga terjangkau dan bimbingan intensif.',
    discount: 30,
    duration: 'Juni - Agustus',
    promoCode: 'STUDENT30',
  },
  {
    imageUrl: images.pic2,
    title: 'Paket Lansia',
    description: 'Pendampingan khusus dan fasilitas ramah lansia selama ibadah.',
    discount: 18,
    duration: 'Oktober - Desember',
    promoCode: 'SENIOR18',
  },
];
</script>

<style scoped>
</style>
