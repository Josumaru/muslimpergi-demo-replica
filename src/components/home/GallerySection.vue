<template>
    <div class=" bg-white relative flex items-center justify-center">
        <img src="@/assets/images/background/bg_0.png" class="w-full h-full object-cover absolute inset-0 z-0" />
        <div class="w-full h-full overflow-hidden container">
            <div class="relative z-10 flex flex-col items-center h-full text-center p-8">
                <div class="flex items-center justify-center gap-4 flex-col">
                    <OvalTag>
                        <template #title>
                            Galeri
                        </template>
                    </OvalTag>
                    <p class="text-[#4AA055] text-5xl font-title mt-4">Galeri Perjalanan dan Destinasi Tujuan</p>
                    <p class="text-black mt-2">Momen-momen berkesan jamaah UmrohKu selama perjalanan Ibadah</p>
                </div>
                <div class="grid grid-cols-3 gap-4 pt-6">
                    <img v-for="item in images" :key="item" :src="item" class="aspect-square rounded-xl object-cover" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import OvalTag from "@/components/common/OvalTag.vue"
const images = [
    "/src/assets/images/gallery/gallery_0.jpg",
    "/src/assets/images/gallery/gallery_1.jpg",
    "/src/assets/images/gallery/gallery_2.jpg",
    "/src/assets/images/gallery/gallery_3.jpg",
    "/src/assets/images/gallery/gallery_9.jpg",
    "/src/assets/images/gallery/gallery_10.jpg",
]
</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>
