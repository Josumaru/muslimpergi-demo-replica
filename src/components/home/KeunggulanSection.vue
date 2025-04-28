<script setup lang="ts">
import OvalTag from '@/components/common/OvalTag.vue';
import KeunggulanCard from '../common/KeunggulanCard.vue';
</script>

<template>
  <main>
    <div class="bg-[#4AA055] py-10 px-4 md:px-10">
      <div class="flex flex-col items-center justify-center text-center mt-10 gap-3">
        <!-- Oval Tag -->
        <OvalTag>
            <template #title>
                Keunggulan
            </template>
        </OvalTag>

        <!-- Title -->
        <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          Mengapa Memilih Umroh Amanah?
        </h2>

        <!-- Sub-description -->
        <p class="text-white text-sm md:text-base max-w-xl padding-4">
          Kami menyediakan layanan terbaik untuk ibadah umroh dan haji Anda
        </p>
      </div>

      <!-- 4 Cards Section -->
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 pt-4 mt-10">
        <KeunggulanCard>
            <template #icon>
                <img src="" alt="Logo" class="w-12 h-12">
            </template>
            <template #title>
                Terpercaya
            </template>
            <template #description>
                Izin resmi Kementerian Agama dengan pengalaman lebih dari 10 tahun melayani jamaah
            </template>
        </KeunggulanCard>

        <KeunggulanCard>
            <template #icon>
                <img src="" alt="Logo" class="w-12 h-12">
            </template>
            <template #title>
                Pembimbing Ahli
            </template>
            <template #description>
                Ibadah Anda akan dibimbing oleh ustadz berpengalaman yang sabar, ramah, dan memahami kebutuhan jamaah.
            </template>
        </KeunggulanCard>

        <KeunggulanCard>
            <template #icon>
                <img src="" alt="Logo" class="w-12 h-12">
            </template>
            <template #title>
               Lokasi Hotel Strategis     
            </template>
            <template #description>
                Hotel pilihan kami berlokasi dekat Masjidil Haram dan Masjid Nabawi, memudahkan Anda dalam beribadah tanpa hambatan.
            </template>
        </KeunggulanCard>
    
        <KeunggulanCard>
            <template #icon>
                <img src="" alt="Logo" class="w-12 h-12">
            </template>
            <template #title>
                Pembayaran Fleksibel
            </template>
            <template #description>
                Kami menyediakan berbagai metode pembayaran, termasuk cicilan ringan hingga 12 bulan, untuk kenyamanan finansial Anda.
            </template>
        </KeunggulanCard>

        <KeunggulanCard>
            <template #icon>
                <img src="" alt="Logo" class="w-12 h-12">
            </template>
            <template #title>
                Layanan Prima
            </template>
            <template #description>
                Mulai dari pendaftaran hingga kepulangan, tim profesional kami siap melayani dan mendampingi Anda dengan sepenuh hati.
            </template>
        </KeunggulanCard>
      </div>
    </div>
  </main>
</template>
