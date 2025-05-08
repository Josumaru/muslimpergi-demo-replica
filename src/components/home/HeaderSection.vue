<template>
  <div class="relative w-[full] flex items-center justify-center pb-6 min-h-screen">
    <!-- Background -->
    <img :src="image.bg_header" class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-5"></div>

    <!-- Konten -->
    <div class="relative container pb-14 z-20 px-4 pt-20 flex flex-col items-center text-white text-center">
      <h1 class="text-[70px] md:text-[135px] font-bold pt-10" id="title">UMROH AMANAH</h1>
      <p class="text-lg md:text-xl pb-10 -mt-10" id="description"> {{ $t('beranda.headerSubtitle') }}
      </p>

      <!-- Wrapper untuk tab + form agar menyatu -->
      <div class="w-full max-w-[15  00px] bg-white/50 mt-10 rounded-t-3xl rounded-b-2xl overflow-hidden">
        <!-- Tab Bar -->
        <div class="flex w-full rounded-b-2xl rounded-t-2xl top-4 overflow-hidden">
          <div class="w-1/2 bg-[#229440]  text-black py-3 text-center hover:bg-[#4DD32C]" id="tabPart">
            {{ $t('beranda.paketUmroh') }}
          </div>
          <div class="w-1/2 bg-[#4DD32C] text-black py-3 text-center hover:bg-[#229440] focus:outline-2" id="tabPart">
            {{ $t('beranda.paketHaji') }}
          </div>
        </div>

        <!-- Form Search -->
        <div class="px-4 py-4 pb-8">
          <h3 class="text-black text-xl font-semibold mb-4 text-left" id="searchText">Cari Paket Umrah terbaik Termurah
          </h3>

          <!-- Bar Grid -->
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Field 1 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">
                {{ $t('beranda.keberangkatan') }}

              </label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Jakarta</option>
              </select>
            </div>

            <!-- Field 2 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">
                {{ $t('beranda.paketUmroh') }}

              </label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Umroh Reguler</option>
              </select>
            </div>

            <!-- Field 3 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2">
                {{ $t('beranda.maskapai') }}

              </label>
              <select class="w-full py-2 px-2 rounded-full text-black bg-white">
                <option>Garuda Indonesia</option>
              </select>
            </div>

            <!-- Field 4 -->
            <div class="text-left rounded-md py-2">
              <label class="block text-black text-sm font-semibold mb-1 pb-2"> {{ $t('beranda.bandara') }}
              </label>
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
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-30 group" @click="scrollToCTA">
      <div class="flex flex-col animate-bounce items-center space-y-1 transition-all duration-300 group-hover:space-y-0"
        id="scrollArrow">
        <ChevronDown class="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-y-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg_header from '@/assets/images/background/bg_header.svg';
import { ChevronDown } from 'lucide-vue-next';

const image = {
  bg_header,
};


const scrollToCTA = () => {
  const target = document.getElementById("ctaSection");
  const navbarOffset = 107;

  if (target) {
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  } else {
    console.warn("CTA section not found");
  }
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

#tabPart {
  cursor: pointer;
  transition: background-color 0.5s ease;
  font-weight: bold;
}

@keyframes scrollArrowAnim {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateY(10px);
    opacity: 0.6;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-scroll-arrow {
  animation: scrollArrowAnim 1.5s infinite ease-in-out;
}
</style>
