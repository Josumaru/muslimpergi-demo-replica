<template>
    <nav
        class="bg-white flex-col shadow drop-shadow-black rounded-b-3xl flex items-center justify-center fixed top-0 z-[99] w-full">
        <div class="bg-[#34AF5B] w-full py-3 flex items-center justify-center">
            <div class="container text-white flex items-center justify-between">
                <div class="flex items-center justify-center gap-2">
                    <RouterLink to="/" class="font-navbar">Paket Umrah</RouterLink>
                    <p>|</p>
                    <RouterLink to="/" class="font-navbar">Program Haji</RouterLink>
                    <p>|</p>
                    <RouterLink to="/" class="font-navbar">Layanan Pelanggan</RouterLink>
                </div>
                <p class="text-white font-bold font-navbar">
                    Pengalaman Umrah yang Aman dan Terpercaya. Amankan Kursi Anda Sekarang !
                </p>
                <div class="flex items-center justify-center gap-2">
                    <PhoneIcon class="cursor-pointer hover:text-[#34AF5B]" />
                    <FacebookIcon class="cursor-pointer hover:text-[#34AF5B]" />
                    <MailIcon class="cursor-pointer hover:text-[#34AF5B]" />
                    <TwitterIcon class="cursor-pointer hover:text-[#34AF5B]" />
                    <InstagramIcon class="cursor-pointer hover:text-[#34AF5B]" />
                </div>

            </div>
        </div>
        <div class="container flex items-center justify-between py-3">
            <div>
                <img src="@/assets/logo.svg" alt="Logo" class="w-16 h-16 mx-auto mb-4" />
            </div>
            <div>
                <ul class="flex gap-4 items-center justify-center font-bold text-lg">
                    <li>
                        <RouterLink to="/" class="text-gray-700"> Beranda</RouterLink>
                    </li>
                    <li class="relative" @mouseleave="activeDropdown = null">
                        <button @click="toggleDropdown('tentang')"
                            class="text-gray-700 flex items-center justify-center focus:outline-none">
                            Tentang Kami
                            <ChevronRight />
                        </button>
                        <ul v-show="activeDropdown === 'tentang'"
                            class="absolute top-full mt-2 bg-white shadow rounded w-40 z-50 text-sm text-gray-700 font-normal">
                            <li>
                                <RouterLink to="/asd1" class="block px-4 py-2 hover:bg-gray-100">Company Profile
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/asd2" class="block px-4 py-2 hover:bg-gray-100">Pusat</RouterLink>
                            </li>
                        </ul>
                    </li>

                    <li class="relative" @mouseleave="activeDropdown = null">
                        <button @click="toggleDropdown('paket')"
                            class="text-gray-700 flex items-center justify-center focus:outline-none">
                            Paket
                            <ChevronRight />
                        </button>
                        <ul v-show="activeDropdown === 'paket'"
                            class="absolute top-full mt-2 bg-white shadow rounded w-40 z-50 text-sm text-gray-700 font-normal">
                            <li>
                                <RouterLink to="/asd1" class="block px-4 py-2 hover:bg-gray-100">Company Profile
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/asd2" class="block px-4 py-2 hover:bg-gray-100">Pusat</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="relative" @mouseleave="activeDropdown = null">
                        <button @click="toggleDropdown('promo')"
                            class="text-gray-700 flex items-center justify-center focus:outline-none">
                            Promo
                            <ChevronRight />
                        </button>
                        <ul v-show="activeDropdown === 'promo'"
                            class="absolute top-full mt-2 bg-white shadow rounded w-40 z-50 text-sm text-gray-700 font-normal">
                            <li>
                                <RouterLink to="/asd1" class="block px-4 py-2 hover:bg-gray-100">Company Profile
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/asd2" class="block px-4 py-2 hover:bg-gray-100">Pusat</RouterLink>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <RouterLink to="/" class="text-gray-700"> Galeri</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-700"> Artikel</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-700">Home</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex gap-4">
                <RouterLink to="/login"
                    class="border-2 font-button hover:bg-[#34AF5B] hover:text-white transition-colors border-[#34AF5B] flex items-center text-[#34AF5B] font-bold px-4 py-2 rounded-4xl">
                    Unduh Aplikasi
                </RouterLink>
                <RouterLink to="/login"
                    class="font-button hover:bg-white hover:text-[#34AF5B] transition-colors border-2 hover:border-[#34AF5B] bg-[#34AF5B] font-bold text-white px-6 py-2 rounded-4xl">
                    Login
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronRight, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TwitterIcon } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
const activeDropdown = ref<string | null>(null)

function toggleDropdown(name: string) {
    activeDropdown.value = activeDropdown.value === name ? null : name
}

</script>

<style lang="css" scoped>
.font-button {
    font-weight: 600;
    align-items: center;
    justify-content: center;
}

.font-navbar {
    font-weight: 500;
}
</style>
