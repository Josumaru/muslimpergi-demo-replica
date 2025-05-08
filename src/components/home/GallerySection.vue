<template>
    <div class="relative flex items-center justify-center">
        <img src="@/assets/images/background/bg_0.png" class="w-full h-full object-cover absolute inset-0 z-0" />
        <div class="w-full h-full z-50 overflow-hidden container">
            <div class="relative flex flex-col items-center h-full text-center p-4">
                <div class="flex items-center justify-center gap-4 flex-col">
                    <OvalTag bg-color="#34AF5B" text-color="#FFFFFF">
                        <template #title>
                            {{ $t('galeri.galeri') }}
                        </template>
                    </OvalTag>
                    <p class="text-[#4AA055] text-5xl font-title mt-4">Galeri Perjalanan dan Destinasi Tujuan</p>
                    <p class="text-black dark:text-zinc-100 mt-2">Momen-momen berkesan jamaah UmrohKu selama perjalanan
                        Ibadah</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                    <img v-for="item in images" :key="item" :src="item"
                        class="aspect-square rounded-4xl object-cover" />
                </div>
            </div>
            <div class="w-full flex items-center justify-center pb-10">
                <MoreButton to="/">
                    Lihat Semua Galeri
                </MoreButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import OvalTag from "@/components/common/OvalTag.vue"
import img0 from '@/assets/images/gallery/gallery_0.jpg'
import img1 from '@/assets/images/gallery/gallery_1.jpg'
import img2 from '@/assets/images/gallery/gallery_2.jpg'
import img3 from '@/assets/images/gallery/gallery_3.jpg'
import img9 from '@/assets/images/gallery/gallery_9.jpg'
import img10 from '@/assets/images/gallery/gallery_10.jpg'
import MoreButton from "../common/MoreButton.vue"
const images = [img0, img1, img2, img3, img9, img10]
</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>
