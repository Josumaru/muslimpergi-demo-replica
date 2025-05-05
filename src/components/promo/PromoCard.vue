<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full relative">
    <!-- Badge Diskon -->
    <div class="absolute top-2 left-2 bg-yellow-300 text-yellow-900 text-xs px-3 py-1 rounded-full font-semibold">
      Diskon {{ discount }}%
    </div>
    <!-- Badge Durasi -->
    <div class="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
      {{ duration }}
    </div>

    <!-- Gambar -->
    <img :src="imageUrl ?? '@/assets/images/popularComponents/pic4.svg'" alt="Paket Image"
      class="w-full h-40 object-cover" />

    <!-- Konten -->
    <div class="p-4 flex flex-col justify-between flex-1 gap-4">
      <div class="flex flex-col justify-startx">
        <!-- Title -->
        <h3 class="text-lg font-bold text-black leading-tight mb-2 py-2" id="titleText">
          {{ title }}
        </h3>
        <!-- Deskripsi -->
        <p class="text-sm text-gray-700 mb-4 line-clamp-2 min-h-[70px] pb-5">
          {{ description }}
        </p>
        <!-- Kode Promo -->
        <div class="bg-gray-100 rounded-lg px-4 py-3 my-3">
          <p class="text-sm text-gray-500 mb-1">Kode Promo :</p>
          <p class="text-xl font-bold text-[#4AA055]" id="promoText">{{ promoCode }}</p>
        </div>
      </div>

      <!-- Tombol -->
      <button class="bg-[#4AA055] hover:bg-green-700 text-white mt-4 py-2 rounded-lg text-sm font-semibold">
        Lihat Detail
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps({
  imageUrl: String,
  title: String,
  description: String,
  discount: [Number, String],
  duration: String,
  promoCode: String
})

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

#promoText {
  font-size: 2rem;
  font-weight: bold;
  color: #4AA055;
}

#titleText {
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
}
</style>
