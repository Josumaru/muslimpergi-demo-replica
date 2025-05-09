<template>
    <div class="pt-40 flex items-center justify-center">
        <div class="container px-4 flex flex-col gap-5">
            <div class="flex pl-4 items-center cursor-pointer text-black gap-1 hover:underline">
                <ArrowLeft class="w-6 h-6 " />
                <p>Kembali ke Artikel</p>
            </div>
            <div class="flex gap-2 items-center text-gray-500">
                <p class="text-blue-400">Tips</p>
                <span>•</span>
                <Calendar class="w-5 h-5" />
                <p>10 April 2025</p>
                <span>•</span>
                <Clock class="w-5 h-5" />
                <p>5 menit membaca</p>
            </div>
            <div>
                <p class="font-title text-black text-xl md:text-3xl lg:text-5xl">Panduan Lengkap Persiapan Umrah untuk
                    Pemula</p>

            </div>
            <p class=" text-gray-500">Persiapan yang matang akan membuat ibadah umrah Anda lebih
                khusyuk dan
                bermakna.
                Simak panduan
                lenkapnya disini</p>
            <div class="flex items-center gap-4">
                <img src="@/assets/images/gallery/gallery_0.jpg" alt="Article Image"
                    class="h-12 w-12 object-cover rounded-full" />
                <div>
                    <p class="text-xl">Ustadz Ahmad Fauzi</p>
                    <p class="text-gray-500">Pembimbing Umrah Senior</p>
                </div>
            </div>
            <div>
                <img src="@/assets/images/gallery/gallery_0.jpg" alt="Thumbnail"
                    class="w-full aspect-[2/1] object-cover rounded-2xl" />
            </div>
            <div class="grid grid-cols-10 gap-4">
                <markdown-element class="col-span-8" />
                <div class="col-span-2 hidden lg:flex flex-col gap-2 w-full">
                    <div class="col-span-2 flex flex-col gap-2 p-4 border w-full border-gray-200 rounded-xl">
                        <h1 class="text-lg font-medium dark:text-zinc-100">Progres Membaca</h1>
                        <div class="w-full h-2 rounded-xl overflow-hidden bg-[#34AF5B40]">
                            <div class="bg-[#34AF5B] h-full" :class="`w-[${progress}%] `"></div>
                        </div>
                        <div class="flex gap-2">
                            <p class="text-[#34AF5B]">{{ progress }}%</p>
                            <p class="dark:text-zinc-100">telah dibaca:</p>
                        </div>
                        <div>
                            <p class="dark:text-zinc-100">Bagian yang telah dibaca:</p>
                            <ul class="mt-2">
                                <li v-for="(section, index) in sections" :key="index"
                                    class="flex h-full items-start gap-2">
                                    <div class="relative h-14 flex justify-center">
                                        <div :class="section.completed ? 'bg-[#34AF5B]' : 'bg-transparent'"
                                            class="h-16 w-[3px] absolute">
                                        </div>
                                        <div class="w-6 h-6 z-20 aspect-square rounded-full flex items-center justify-center"
                                            :class="section.completed ? 'bg-[#34AF5B] text-white' : 'border-2 dark:bg-black bg-white border-gray-300'">
                                            <span v-if="section.completed">
                                                <Check class="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="font-medium text-[#34AF5B]">{{ section.title }}</p>
                                        <p class="text-sm text-gray-600 dark:text-zinc-300">{{ section.description
                                            }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border border-gray-200 rounded-xl p-4">
                        <h1 class="text-lg font-medium">Artikel Terkait</h1>
                        <div class="flex items-center justify-center flex-col gap-3">
                            <div
                                class="flex items-center gap-3 cursor-pointer hover:bg-black/5 transition-colors rounded-xl">
                                <img src="@/assets/images/gallery/gallery_0.jpg" class="rounded-xl w-20 h-20"
                                    alt="Image 2">
                                <div class="h-full">
                                    <h1 class="text-lg font-medium line-clamp-2">Kesendirian di dalam Goa</h1>
                                    <p class="text-gray-500">25 April 2025</p>
                                </div>
                            </div>
                            <div
                                class="flex items-center gap-3 cursor-pointer hover:bg-black/5 transition-colors rounded-xl">
                                <img src="@/assets/images/gallery/gallery_0.jpg" class="rounded-xl w-20 h-20"
                                    alt="Image 2">
                                <div class="h-full">
                                    <h1 class="text-lg font-medium line-clamp-2">Kesendirian di dalam Goa</h1>
                                    <p class="text-gray-500">25 April 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ArrowLeft, Calendar, Clock, Check } from 'lucide-vue-next';
import { ref } from 'vue'

const progress = ref(38)

const sections = ref([
    { title: 'Pendahuluan', description: 'Pengenalan tentang ibadah umrah', completed: true },
    { title: 'Persiapan Dokumen', description: 'Dokumen-dokumen yang perlu disiapkan', completed: true },
    { title: 'Persiapan Fisik', description: 'Tips menjaga kesehatan sebelum umrah', completed: true },
    { title: 'Persiapan Mental', description: 'Persiapan spiritual dan mental', completed: true },
    { title: 'Perlengkapan', description: 'Barang-barang yang perlu dibawa', completed: false },
])
</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>