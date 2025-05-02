<script setup lang="ts">
import OvalTag from '@/components/common/OvalTag.vue';
import KeunggulanCard from '../common/KeunggulanCard.vue';
import background from '@/assets/KeunggulanAssets/background.svg';
import expertise from '@/assets/KeunggulanAssets/expertise.svg';
import location from '@/assets/KeunggulanAssets/location.svg';
import protection from '@/assets/KeunggulanAssets/protection.svg';
import trusted from '@/assets/KeunggulanAssets/trusted.svg';
import wallet from '@/assets/KeunggulanAssets/wallet.svg';

const images = {
  background,
  expertise,
  location,
  protection,
  trusted,
  wallet,
};
</script>

<template>
  <main>
    <div class="relative flex items-center justify-center flex-col py-10 px-4 md:px-10 bg-cover bg-center"
      :style="{ backgroundImage: `url(${images.background})` }">
      <div class="absolute inset-0 z-0 opacity-60 bg-gradient-to-b from-white to-transparent"></div>

      <!-- Main Content -->
      <div class="relative container px-4 z-20 flex flex-col items-center justify-center text-center mt-10 gap-3">
        <OvalTag bg-color="#FFFFFF" text-color="#34AF5B">
          <template #title>
            <span class="font-extrabold">Keunggulan</span>
          </template>
        </OvalTag>

        <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold" id="question">
          Mengapa Memilih Umroh Amanah?
        </h2>
        <p class="text-black text-xs md:text-base max-xl px-4">
          Kami menyediakan layanan terbaik untuk ibadah umroh dan haji Anda
        </p>
      </div>

      <!-- Cards Section -->
      <div
        class="relative container z-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pt-10 mt-10">
        <KeunggulanCard>
          <template #icon>
            <img :src="images.trusted" alt="Terpercaya" class="w-14 h-14 mx-auto" />
          </template>
          <template #title>Terpercaya</template>
          <template #description>
            Izin resmi Kementerian Agama dengan pengalaman lebih dari 10 tahun melayani jamaah
          </template>
        </KeunggulanCard>

        <KeunggulanCard>
          <template #icon>
            <img :src="images.expertise" alt="Pembimbing Ahli" class="w-14 h-14 mx-auto" />
          </template>
          <template #title>Pembimbing Ahli</template>
          <template #description>
            Ibadah Anda akan dibimbing oleh ustadz berpengalaman yang sabar, ramah, dan memahami kebutuhan jamaah.
          </template>
        </KeunggulanCard>

        <KeunggulanCard>
          <template #icon>
            <img :src="images.location" alt="Lokasi Hotel Strategis" class="w-14 h-14 mx-auto" />
          </template>
          <template #title>Lokasi Hotel Strategis</template>
          <template #description>
            Hotel pilihan kami berlokasi dekat Masjidil Haram dan Masjid Nabawi, memudahkan Anda dalam beribadah tanpa
            hambatan.
          </template>
        </KeunggulanCard>

        <KeunggulanCard>
          <template #icon>
            <img :src="images.wallet" alt="Pembayaran Fleksibel" class="w-14 h-14 mx-auto" />
          </template>
          <template #title>Pembayaran Fleksibel</template>
          <template #description>
            Kami menyediakan berbagai metode pembayaran, termasuk cicilan ringan hingga 12 bulan, untuk kenyamanan
            finansial Anda.
          </template>
        </KeunggulanCard>

        <KeunggulanCard>
          <template #icon>
            <img :src="images.protection" alt="Layanan Prima" class="w-14 h-14 mx-auto" />
          </template>
          <template #title>Layanan Prima</template>
          <template #description>
            Mulai dari pendaftaran hingga kepulangan, tim profesional kami siap melayani dan mendampingi Anda dengan
            sepenuh hati.
          </template>
        </KeunggulanCard>
      </div>
    </div>
  </main>
</template>


<style scoped>
#question {
  font-weight: bolder;
}
</style>