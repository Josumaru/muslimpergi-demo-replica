<template>
    <div class="pt-40 text-black flex items-center justify-center">
        <div class="container px-4 flex items-center  justify-center flex-col">
            <h1 class="text-3xl xl:text-6xl dark:text-white text-center font-title">Paket Perjalanan Ibadah</h1>
            <p class="text-[#4c5462] dark:text-zinc-200 text-center text-lg xl:text-2xl pt-4">Pilih paket perjalanan
                ibadah yang sesuai
                dengan
                kebutuhan dan
                keinginan Anda.</p>
            <div class="w-full">
                <form class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4 xl:p-10 shadow-2xl rounded-xl">
                    <div>
                        <label for="default-search" class="mb-2 text-sm font-medium sr-only">Search</label>
                        <div class="relative h-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <Search class="dark:text-white" />
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full h-full p-4 ps-10 text-sm border-2 rounded-full dark:text-white outline-0 dark:border-zinc-100  focus:ring-green-500 focus:border-green-500"
                                placeholder="Cari Paket" required />
                        </div>
                    </div>

                    <div class="text-left focus:border-0 text-xl px-2 border-2 dark:border-zinc-100 rounded-full">
                        <select
                            class="w-full dark:bg-transparent p-[14px] dark:text-white ring-0 400 outline-0 rounded-full text-black ">
                            <option class="dark:bg-zinc-900">Semua Paket</option>
                            <option class="dark:bg-zinc-900">Murah</option>
                        </select>
                    </div>
                    <div class="text-left focus:border-0 dark:border-zinc-100 text-xl px-2 border-2 rounded-full">
                        <select class="w-full p-[14px] ring-0 400 dark:text-white outline-0 rounded-full text-black ">
                            <option class="p-5 dark:bg-zinc-900" v-for="(bulan, index) in bulanList" :key="index">
                                {{ bulan }}
                            </option>
                        </select>
                    </div>
                    <button
                        class="p-4 bg-[#34AF5B] font-semibold cursor-pointer text-white border-2 border-black rounded-full hover:bg-white dark:hover:bg-transparent hover:text-[#34AF5B] hover:border-[#34AF5B] transition-colors">Filter</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';
const bulanList = [
    'Semua Bulan',
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
]
</script>

<style lang="css" scoped>
.font-title {
    font-weight: 600;
}
</style>