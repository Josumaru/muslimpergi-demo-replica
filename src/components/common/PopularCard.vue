<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden w-[320px] flex flex-col h-full pb-3">
    <!-- Banner Image -->
    <img :src="imageUrl ?? '@/assets/PopularComponents/pic4.svg'" alt="Tour Image"
      class="w-full h-40 object-cover" />

    <!-- Content -->
    <div class="p-4 flex-1 flex flex-col justify-between min-h-[180px]">
      <div>
        <!-- Title -->
        <h3 class="text-[16px] font-semibold text-black mb-2 leading-tight pb-2 min-h-[48px] line-clamp-2">
          {{ title }}
        </h3>

        <!-- Jadwal -->
        <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
          <div class="flex items-center gap-2">
            <CalendarDays class="w-4 h-4 stroke-gray-700" />
            <span>Jadwal</span>
          </div>
          <span class="text-right">{{ date }}</span>
        </div>

        <!-- Seats -->
        <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
          <div class="flex items-center gap-2">
            <Users class="w-4 h-4 stroke-gray-700" />
            <span>Seats</span>
          </div>
          <span class="text-right">{{ seats }}</span>
        </div>

        <!-- Hotel -->
        <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
          <div class="flex items-center gap-2">
            <BedDouble class="w-4 h-4 stroke-gray-700" />
            <span>Hotel</span>
          </div>
          <div class="flex gap-1 text-yellow-500">
            <Star v-for="n in hotelStars" :key="n" class="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
          </div>
        </div>

        <!-- Berangkat -->
        <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
          <div class="flex items-center gap-2">
            <PlaneTakeoff class="w-4 h-4 stroke-gray-700" />
            <span>Berangkat Dari</span>
          </div>
          <span class="text-right">{{ departure }}</span>
        </div>

        <!-- Maskapai -->
        <div class="flex justify-between items-center text-sm text-gray-700">
          <div class="flex items-center gap-2">
            <Plane class="w-4 h-4 stroke-gray-700" />
            <span>Maskapai</span>
          </div>
          <span class="text-right">{{ airline }}</span>
        </div>
      </div>
    </div>

    <!-- Harga -->
    <div class="bg-[#4AA055] text-white text-center font-bold py-3 rounded-b-xl">
      {{ price }}
    </div>


  </div>
</template>

<script setup lang="ts">
import {
  CalendarDays,
  Users,
  BedDouble,
  Star,
  PlaneTakeoff,
  Plane
} from 'lucide-vue-next'

defineProps({
  imageUrl: String,
  title: String,
  date: String,
  seats: String,
  hotelStars: { type: Number, default: 0 },
  departure: String,
  airline: String,
  price: String
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
</style>