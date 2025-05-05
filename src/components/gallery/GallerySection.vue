<template>
    <div class="flex items-center justify-center flex-col">
        <div class="container">
            <div class="items-center overflow-scroll justify-center p-4 flex-wrap flex gap-2 md:gap-4">
                <button
                    class="px-2 md:px-6 py-1 md:py-2 rounded-full cursor-pointer border-2 font-button border-[#34AF5B]"
                    v-for="item in btns" :key="item" :class="isActiveButton == item ? 'bg-[#34AF5B] text-white' : ''"
                    @click="setIsActive(item)">
                    {{ item }}
                </button>
            </div>
            <div class="grid px-4 py-4 md:py-20 grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-4 w-full">
                <div v-for="(item, idx) in images"
                    :class="(isActiveButton == item.tag || isActiveButton == 'Semua') ? 'block' : 'hidden'" :key="idx"
                    class="col-span-1 aspect-square group rounded-xl relative overflow-hidden w-full">
                    <img :src="item.src" class="w-full absolute h-full overflow-hidden" />
                    <div
                        class="absolute group-hover:translate-y-0 translate-y-full transition-all duration-200 bg-gradient-to-b from-transparent to-black w-full h-full">
                        <p class="absolute font-location text-white bottom-3 left-3">{{ item.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

import img1 from '@/assets/images/gallery/gallery_0.jpg';
import img2 from '@/assets/images/gallery/gallery_1.jpg';
import img3 from '@/assets/images/gallery/gallery_2.jpg';
import img4 from '@/assets/images/gallery/gallery_3.jpg';

const btns = [
    "Semua",
    "Makkah",
    "Madinah",
    "Turki",
    "Dubai",
    "Istambul",
    "Jamaah"
]

const images = [
    {
        src: img1,
        location: "Madinah",
        alt: "Image 1",
        tag: "Semua"
    },
    {
        src: img2,
        location: "Madinah",
        alt: "Image 2",
        tag: "Makkah"
    },
    {
        src: img3,
        location: "Madinah",
        alt: "Image 3",
        tag: "Madinah"
    },
    {
        src: img4,
        location: "Madinah",
        alt: "Image 4",
        tag: "Turki"
    },
    {
        src: img1,
        location: "Madinah",
        alt: "Image 5",
        tag: "Dubai"
    },
    {
        src: img2,
        location: "Madinah",
        alt: "Image 6",
        tag: "Istambul"
    },
    {
        src: img3,
        location: "Madinah",
        alt: "Image 7",
        tag: "Jamaah"
    },
    {
        src: img4,
        location: "Madinah",
        alt: "Image 8",
        tag: "Semua"
    },
    {
        src: img1,
        location: "Madinah",
        alt: "Image 9",
        tag: "Makkah"
    },
    {
        src: img2,
        location: "Madinah",
        alt: "Image 10",
        tag: "Madinah"
    },
    {
        src: img3,
        location: "Madinah",
        alt: "Image 11",
        tag: "Turki"
    },
    {
        src: img4,
        location: "Madinah",
        alt: "Image 12",
        tag: "Dubai"
    },
    {
        src: img1,
        location: "Madinah",
        alt: "Image 13",
        tag: "Istambul"
    },
    {
        src: img2,
        location: "Madinah",
        alt: "Image 14",
        tag: "Jamaah"
    },
    {
        src: img3,
        location: "Madinah",
        alt: "Image 15",
        tag: "Semua"
    },
    {
        src: img4,
        location: "Madinah",
        alt: "Image 16",
        tag: "Makkah"
    },
    {
        src: img1,
        location: "Madinah",
        alt: "Image 17",
        tag: "Madinah"
    },
    {
        src: img2,
        location: "Madinah",
        alt: "Image 18",
        tag: "Turki"
    },
    {
        src: img3,
        location: "Madinah",
        alt: "Image 19",
        tag: "Dubai"
    },
    {
        src: img4,
        location: "Madinah",
        alt: "Image 20",
        tag: "Istambul"
    },
    {
        src: img1,
        location: "Madinah",
        alt: "Image 21",
        tag: "Jamaah"
    }
]
const isActiveButton = ref<string>('Semua')
const setIsActive = (button: string) => {
    return isActiveButton.value = button
} 
</script>

<style scoped>
.font-button {
    font-weight: 500;
}

.font-location {
    font-weight: 700;
}
</style>