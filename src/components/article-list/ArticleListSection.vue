  <template>
    <div class="flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6">
      <aside class="w-full md:w-1/4 p-4 space-y-6 ml-5">
      <!-- Cari Artikel -->
      <div class="py-4">
      <div class="border rounded-xl p-4 shadow-sm">
        <label class="block mb-2 font-semibold menu-text">Cari Artikel</label>
        <div class="relative">
          <input
            type="text"
            placeholder="Cari Artikel"
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
      <!-- Artikel Utama -->
      <section class="w-full md:w-3/4">
        <!-- Filter Tabs -->
        <div class="flex gap-4 mb-6 pb-3">
              <button
                v-for="category in ['Semua', 'Umrah', 'Haji', 'Tips']"
                :key="category"
                @click="activeCategory = category"
                :class="[
                  'font-semibold px-4 py-1 rounded transition',
                  activeCategory === category
                    ? 'bg-green-500 text-white'
                    : 'border border-green-500 text-green-500 hover:bg-green-50'
                ]"
              >
                {{ category }}
              </button>
            </div>


        <!-- Grid Artikel -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ArticleCard
        v-for="(article, index) in filteredArticles"
        :key="index"
        :title="article.title"
        :image="article.image"
        :category="article.category"
        :date="article.date"
        :readTime="article.readTime"
        :description="article.description"
        :tags="article.tags"
      />
        </div>
      </section>
    </div>
  </template>


  <script setup lang="ts">
  import ArticleCard from './ArticleCard.vue'
  import img1 from '@/assets/images/article-bg/article-1.jpg'
  import img2 from '@/assets/images/article-bg/article-2.jpg'
  import img3 from '@/assets/images/article-bg/article-3.jpg'
  import { ref, computed } from 'vue'

const activeCategory = ref('Semua')

const filteredArticles = computed(() => {
  if (activeCategory.value === 'Semua') return articles
  return articles.filter(article => article.category === activeCategory.value)
})



  const images = {
    img1,
    img2,
    img3
  }

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
  const articles = [
    {
      title: 'Panduan Lengkap Persiapan Umrah untuk Pemula',
      date: '10 Mei 2024',
      readTime: '8 menit',
      description:
        'Panduan lengkap persiapan umrah untuk jamaah yang akan berangkat, mulai dari dokumen hingga perlengkapan yang harus dibawa.',
      tags: ['umrah', 'persiapan', 'panduan', 'ibadah'],
      image: images.img1,
      category: 'Umrah',
    },
    {
      title: 'Doa-doa Penting Selama Ibadah Haji',
      date: '5 Mei 2024',
      readTime: '10 menit',
      description:
        'Kumpulan doa-doa penting yang perlu dihafalkan dan diamalkan selama menunaikan ibadah haji.',
      tags: ['haji', 'doa', 'ibadah'],
      image: images.img2,
      category: 'Haji',
    },
    {
      title: 'Doa-doa Penting Selama Ibadah Haji',
      date: '5 Mei 2024',
      readTime: '10 menit',
      description:
        'Kumpulan doa-doa penting yang perlu dihafalkan dan diamalkan selama menunaikan ibadah haji.',
      tags: ['haji', 'doa', 'ibadah'],
      image:images.img3 ,
      category: 'Haji',
    },  {
      title: 'Doa-doa Penting Selama Ibadah Haji',
      date: '5 Mei 2024',
      readTime: '10 menit',
      description:
        'Kumpulan doa-doa penting yang perlu dihafalkan dan diamalkan selama menunaikan ibadah haji.',
      tags: ['haji', 'doa', 'ibadah'],
      image: images.img1,
      category: 'Haji',
    },
    {
      title: 'Doa-doa Penting Selama Ibadah Haji',
      date: '5 Mei 2024',
      readTime: '10 menit',
      description:
        'Kumpulan doa-doa penting yang perlu dihafalkan dan diamalkan selama menunaikan ibadah haji.',
      tags: ['haji', 'doa', 'ibadah'],
      image: images.img2,
      category: 'Haji',
    },
    // Tambahkan lebih banyak artikel jika perlu
  ]
  </script>

  <style scoped>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
