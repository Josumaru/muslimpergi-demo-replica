<template>
  <div class="bg-white rounded-xl shadow overflow-hidden">
    <!-- Gambar sebagai Header -->
    <div class="relative h-40">
      <img
        :src="image"
        alt="Article Image"
        class="object-cover w-full h-full"
      />
      <!-- Badge Kategori -->
      <span
        class="absolute top-2 left-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow"
      >
        {{ category }}
      </span>
    </div>

    <!-- Konten Artikel -->
    <div class="p-4">
      <!-- Tanggal & Durasi -->
      <div class="text-xs text-gray-500 mb-1">
        {{ date }} •  {{ readTime }}
      </div>

      <!-- Judul -->
      <h3 class="text-base font-semibold leading-snug mb-1 py-2">
        {{ title }}
      </h3>

      <!-- Deskripsi -->
      <p class="text-sm text-gray-600 mb-3 line-clamp-2 pb-2">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4 pb-2">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Tombol -->
      <button class="w-full border border-gray-300 text-sm font-medium py-2 rounded hover:bg-gray-100 transition">
        Baca Selengkapnya
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  category: String,
  date: String,
  readTime: String,
  description: String,
  tags: Array
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
