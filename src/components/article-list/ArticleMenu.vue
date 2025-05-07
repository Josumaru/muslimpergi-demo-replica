<template>
  <aside class="w-full md:w-1/4 p-4 space-y-6 ml-5">
    <!-- Cari Artikel -->
    <div class="py-4">
    <div class="border rounded-xl p-4 shadow-sm">
      <label class="block mb-2 font-semibold menu-text">Cari Artikel</label>
      <div class="relative">
        <input
          type="text"
          placeholder="Cari Paket"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none"
        />
        <svg
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
        </svg>
      </div>
    </div>
  </div>

    <!-- Kategori -->
    <div class="border rounded-xl p-4">
      <h3 class="mb-2 font-semibold menu-text">Kategori</h3>
      <ul class="space-y-2">
        <li v-for="(category, i) in categories" :key="i" class="flex justify-between items-center">
          <span>{{ category }}</span>
          <input type="checkbox" class="form-checkbox rounded-full text-green-600" />
        </li>
      </ul>
    </div>

    <!-- Tag Populer -->
    <div class="py-4">
      <div class="border rounded-xl p-4">
        <h3 class="mb-2 font-semibold py-3 menu-text">Tag Populer</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(tag, i) in popularTags"
            :key="i"
            class="bg-green-500 text-black px-3 py-1 text-sm rounded-full font-semibold cursor-pointer hover:bg-green-600 transition"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Artikel Terbaru -->
    <div>
      <div class="border rounded-xl p-4">
        <h3 class="mb-4 font-semibold menu-text">Artikel Terbaru</h3>
        <ul class="space-y-4">
          <li
            v-for="(article, i) in latestArticles"
            :key="i"
            class="flex items-start gap-4 py-1"
          >
            <div class="w-10 h-10 rounded bg-gray-300" />
            <div px-2>
              <p class="text-sm font-medium leading-tight">{{ article.title }}</p>
              <p class="text-xs text-gray-500">{{ article.date }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const categories = ['Semua', 'Kesehatan', 'Doa', 'Ibadah', 'Sejarah', 'Kuliner']

const popularTags = [
  'kesehatan', 'Tips', 'Umrah', 'Ibadah', 'Doa', 'Makkah', 'Sejarah', 'Kuliner'
]

const latestArticles = [
  {
    title: 'Tips Tetap Sehat Saat Umroh',
    date: '10 Mei 2025'
  },
  {
    title: 'Panduan Lengkap Persiapan Umroh',
    date: '9 Mei 2025'
  },
  {
    title: 'Doa-doa Penting Saat Ibadah Haji',
    date: '11 Mei 2025'
  }
]
</script>

<style scoped>
.menu-text {
  font-size: 1.125rem; /* 18px */
  font-weight: 600; /* semibold */
}
</style>
