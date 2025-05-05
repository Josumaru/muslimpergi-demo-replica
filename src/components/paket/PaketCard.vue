<template>
    <div class="bg-white relative rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
        <!-- Banner Image -->
        <img :src="imageUrl ?? '@/assets/PopularComponents/pic4.svg'" alt="Tour Image"
            class="w-full h-40 object-cover" />
        <div class="absolute top-4 right-4 bg-[#DFBC8A] text-white text-xs font-semibold px-2 py-1 rounded-full">
            {{ tag }}
        </div>

        <!-- Content -->
        <div class="px-4 pt-4 flex-1 flex flex-col justify-between min-h-[180px]">
            <div>
                <!-- Review -->
                <div class="flex items-center gap-2">
                    <Star class="text-[#DFBC8A] h-4 w-4" />
                    <p class="text-[#DFBC8A]">{{ rating }}</p>
                    <p class="text-black">({{ totalReviews }} Ulasan)</p>
                </div>
                <!-- Title -->
                <h3 class="text-[16px] font-title text-black leading-tight py-2 line-clamp-2">
                    {{ title }}
                </h3>

                <!-- Jadwal -->
                <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
                    <div class="flex items-center gap-2">

                        <Clock3 class="w-4 h-4 stroke-gray-700" />
                        <span>{{ days }} Hari</span>
                    </div>
                </div>

                <!-- Seats -->
                <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
                    <div class="flex items-center gap-2">
                        <CalendarDaysIcon class="w-4 h-4 stroke-gray-700" />
                        <span>{{ date }}</span>
                    </div>
                    <span class="text-right">{{ seats }}</span>
                </div>

                <!-- Hotel -->
                <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
                    <div class="flex items-center gap-2">
                        <MapPin class="w-4 h-4 stroke-gray-700" />
                        <span>{{ location }}</span>
                    </div>
                </div>

                <!-- Berangkat -->
                <div class="flex justify-between items-center text-sm text-gray-700 mb-2">
                    <div class="flex items-center gap-2">
                        <Users class="w-4 h-4 stroke-gray-700" />
                        <span>{{ group }}</span>
                    </div>
                    <span class="text-right">{{ departure }}</span>
                </div>
                <!-- Harga -->
                <div class="font-bold text-black py-4 rounded-b-xl">
                    <div class="flex gap-2 flex-col">

                        <p>
                            Mulai dari
                        </p>
                        <p class="font-price text-[#34AF5B] text-4xl">
                            {{ price }}
                        </p>
                        <p>per jamaah (quad)</p>
                    </div>
                    <div class="flex gap-3 pt-4">
                        <button
                            class="w-full bg-[#34AF5B] hover:bg-[#42bd69] border-[#34AF5B] border-2 font-title cursor-pointer text-white p-4 rounded-2xl">Detail</button>
                        <button class="w-full border-2 p-4 font-title  cursor-pointer rounded-2xl">Booking</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import {
    Star,
    PlaneTakeoff,
    Plane,
    Clock3,
    CalendarDaysIcon,
    MapPin,
    Users
} from 'lucide-vue-next'

defineProps({
    imageUrl: String,
    title: String,
    date: String,
    seats: String,
    hotelStars: { type: Number, default: 0 },
    departure: String,
    airline: String,
    price: String,
    tag: { type: String, default: 'Promo Terbatas' },
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    days: { type: Number, default: 0 },
    location: { type: String },
    group: { type: String }
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

.font-title {
    font-weight: 600;
}

.font-price {
    font-weight: 700;
}
</style>