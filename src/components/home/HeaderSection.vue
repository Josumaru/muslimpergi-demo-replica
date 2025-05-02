<template>
  <div class="relative w-full pb-6 min-h-screen">
    <!-- Background -->
    <img :src="image.bg_header" class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10"></div>

    <!-- Konten -->
    <div class="relative z-20 px-4 pt-32 flex flex-col items-center text-white text-center">
      <h1 class="text-[70px] md:text-[135px] font-bold" id="title">UMROH AMANAH</h1>
      <p class="text-lg md:text-xl mt-4 py-10" id="description">Wujudkan Ibadah Umroh/Haji Anda Bersama Kami</p>

      <!-- Wrapper untuk tab + form agar menyatu -->
      <div class="w-full max-w-[1500px] bg-white/50 mt-10 rounded-t-3xl rounded-b-2xl overflow-hidden">
        <!-- Tab Bar -->
        <div class="flex w-full rounded-b-2xl rounded-t-2xl top-4 overflow-hidden">
          <div class="w-1/2 bg-[#229440] text-black py-3 text-center font-semibold">
            Paket Umroh
          </div>
          <div class="w-1/2 bg-[#4DD32C] text-black py-3 text-center font-semibold">
            Paket Haji
          </div>
        </div>

        <!-- Form Search -->
        <div class="px-4 py-8">
          <h3 class="text-black text-xl font-semibold mb-4 text-left" id="searchText">Cari Paket Umrah terbaik Termurah
          </h3>

          <!-- Bar Grid -->
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Field 1 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">Keberangkatan</label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Jakarta</option>
              </select>
            </div>

            <!-- Field 2 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">Jenis Paket</label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Umroh Reguler</option>
              </select>
            </div>

            <!-- Field 3 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">Maskapai</label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Garuda Indonesia</option>
              </select>
            </div>

            <!-- Field 4 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">Bandara Keberangkatan</label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Soekarno Hatta</option>
              </select>
            </div>
          </div>

          <!-- Button -->
          <div class="flex justify-end mt-4 py-4">
            <button class="bg-[#4DD32C] text-white px-6 py-2 rounded-full font-bold">Cari</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg_header from '@/assets/images/background/bg_header.svg';

const image = {
  bg_header,
};
</script>

<style scoped>
#title {
  font-weight: bold;
  /* font-size: 135px; */
}

#searchText {
  font-weight: bold;
}

#description {
  font-weight: normal;
}

.bg-green-600 {
  background-color: #34AF5B;
}

.bg-lime-400 {
  background-color: #A4D65E;
}
</style>