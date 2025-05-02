<template>
    <div class="fixed bottom-20 z-[99] right-20 md:right-24 group overflow-visible">
        <div class="hidden lg:block relative overflow-visible cursor-pointer" @click="togglePopup">
            <button class="w-16 h-16 absolute transition-all duration-300 group-hover:translate-x-[-405px] flex items-center justify-center
          cursor-pointer rounded-full z-20">
                <img src="@/assets/icons/whatsapp.webp" class="-translate-y-1 -translate-x-1" />
            </button>
            <div
                class="h-14 z-10 absolute shrink-0 group-hover:translate-x-[-405px] px-6 bg-[#34AF5B] flex items-center justify-center text-white rounded-full whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100">
                <p class="pl-10">Chat dengan Kami untuk informasi Haji / Umroh</p>
            </div>
        </div>
        <div class="lg:hidden block relative overflow-visible cursor-pointer" @click="togglePopup">
            <button class="w-16 h-16 absolute transition-all duration-300 flex items-center justify-center
          cursor-pointer rounded-full z-20">
                <img src="@/assets/icons/whatsapp.webp" class="-translate-y-1 -translate-x-1" />
            </button>
        </div>
    </div>

    <div v-if="showPopup" class="fixed bottom-24 right-0 lg:right-10 px-4 lg:px-0 bg-opacity-50 z-50">
        <div class="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
            <div class="mb-4 bg-[#34AF5B] flex items-center justify-center relative">
                <h2 class="p-3 pr-8 text-white ">
                    Silakan pilih Haji atau Umroh di bawah ini, Kami akan segera menghubungi Anda Kembali.
                </h2>
                <CircleX class="h-5 w-5 cursor-pointer text-white absolute right-3 top-3" @click="togglePopup" />
            </div>
            <div class="space-y-3 text-black gap-2 px-2 flex flex-col">
                <div class="flex items-center bg-gray-100 rounded-xl p-3 shadow">
                    <img src="@/assets/icons/whatsapp.webp" class="w-8 h-8 mr-3" />
                    <div>
                        <p class="font-bold">Haji Plus</p>
                        <p class="text-sm">Whatsapp Kami untuk informasi detail Haji Plus</p>
                    </div>
                </div>
                <div class="flex items-center bg-gray-100 rounded-xl p-3 shadow">
                    <img src="@/assets/icons/whatsapp.webp" class="w-8 h-8 mr-3" />
                    <div>
                        <p class="font-bold">Haji Furoda</p>
                        <p class="text-sm">Whatsapp Kami untuk informasi detail Haji Plus</p>
                    </div>
                </div>
                <div class="flex items-center bg-gray-100 rounded-xl p-3 shadow">
                    <img src="@/assets/icons/whatsapp.webp" class="w-8 h-8 mr-3" />
                    <div>
                        <p class="font-bold">Umroh Full-Service</p>
                        <p class="text-sm">Whatsapp Kami untuk informasi detail Haji Plus</p>
                    </div>
                </div>
                <div class="flex items-center bg-gray-100 rounded-xl p-3 shadow">
                    <img src="@/assets/icons/whatsapp.webp" class="w-8 h-8 mr-3" />
                    <div>
                        <p class="font-bold">Umroh Free and Easy</p>
                        <p class="text-sm">Whatsapp Kami untuk informasi detail Haji Plus</p>
                    </div>
                </div>
            </div>
            <!-- <div class="mt-4 text-center text-sm text-gray-600">
                <span class="text-green-600 font-bold">● Online</span> | <span class="underline">Privacy policy</span>
            </div> -->
            <!-- <button @click="togglePopup" class="mt-4 w-full bg-[#34AF5B] text-white py-2 rounded-lg hover:bg-green-600">
                Tutup
            </button> -->
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { CircleX } from "lucide-vue-next"
const showPopup = ref(false)
const togglePopup = () => {
    showPopup.value = !showPopup.value
}
</script>

<style scoped></style>