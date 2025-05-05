<template>
    <div class="pt-40 text-black flex items-center justify-center">
        <div class="container px-4 flex items-center  justify-center flex-col">
            <h1 class="text-3xl xl:text-6xl text-center font-title">Paket Perjalanan Ibadah</h1>
            <p class="text-[#4c5462] text-center text-lg xl:text-2xl pt-4">Pilih paket perjalanan ibadah yang sesuai
                dengan
                kebutuhan dan
                keinginan Anda.</p>
            <div class="w-full">
                <form class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4 xl:p-10 shadow-2xl rounded-xl">
                    <div>
                        <label for="default-search" class="mb-2 text-sm font-medium sr-only">Search</label>
                        <div class="relative h-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <Search />
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full h-full p-4 ps-10 text-sm border-2 rounded-full  focus:ring-green-500 focus:border-green-500"
                                placeholder="Cari Paket" required />
                        </div>
                    </div>

                    <div class="text-left focus:border-0 text-xl px-2 border-2 rounded-full">
                        <select class="w-full p-[14px] ring-0 400 outline-0 rounded-full text-black ">
                            <option>Semua Paket</option>
                            <option>Murah</option>
                        </select>
                    </div>
                    <div class="text-left focus:border-0 text-xl px-2 border-2 rounded-full">
                        <select class="w-full p-[14px] ring-0 400 outline-0 rounded-full text-black ">
                            <option v-for="(bulan, index) in bulanList" :key="index">{{ bulan }}</option>
                        </select>
                    </div>
                    <button
                        class="p-4 bg-[#34AF5B] cursor-pointer text-white border-2 border-black rounded-full hover:bg-white hover:text-[#34AF5B] hover:border-[#34AF5B] transition-colors">Filter</button>
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