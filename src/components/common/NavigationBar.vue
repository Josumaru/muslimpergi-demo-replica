<template>
    <nav
        class="backdrop-blur-lg bg-white/60 flex-col shadow-2xl drop-shadow-black rounded-b-3xl flex items-center justify-center fixed top-0 z-[99] w-full">
        <div :class="showPromo ? 'max-h-[100px] opacity-100' : 'max-h-0 -translate-y-10'"
            class="transition-all duration-500 bg-[#34AF5B] w-full py-3 flex items-center justify-center">
            <div class="container px-4 text-white flex items-center justify-center xl:justify-between">
                <div class="xl:flex hidden text-xs 2xl:text-base items-center justify-center gap-2">
                    <RouterLink to="/" class="font-navbar">Paket Umrah</RouterLink>
                    <p>|</p>
                    <RouterLink to="/" class="font-navbar">Program Haji</RouterLink>
                    <p>|</p>
                    <RouterLink to="/" class="font-navbar">Layanan Pelanggan</RouterLink>
                </div>
                <p class="text-white text-xs text-center 2xl:text-base font-bold font-navbar">
                    Pengalaman Umrah yang Aman dan Terpercaya. Amankan Kursi Anda Sekarang!
                </p>
                <div class="hidden xl:flex items-center justify-center gap-2">
                    <PhoneIcon class="cursor-pointer" />
                    <FacebookIcon class="cursor-pointer" />
                    <MailIcon class="cursor-pointer" />
                    <TwitterIcon class="cursor-pointer" />
                    <InstagramIcon class="cursor-pointer" />
                </div>
            </div>
        </div>
        <div class="container flex items-center justify-between px-4 py-3">
            <div class="hidden lg:block">
                <img src="@/assets/logo.svg" alt="Logo" class="w-16 h-16 mx-auto mb-4" />
            </div>
            <Menu @click="toggleSidebar(true)" class="lg:hidden text-[#34AF5B]" />
            <div>
                <ul class="hidden lg:flex gap-4 items-center justify-center font-bold text-lg">
                    <li>
                        <RouterLink to="/" class="text-gray-700">Beranda</RouterLink>
                    </li>
                    <li class="relative group" @mouseover="toggleDropdown('tentang')"
                        @mouseleave="activeDropdown = null">
                        <button @click="toggleDropdown('tentang')"
                            class="text-gray-700 flex items-center justify-center focus:outline-none">
                            Tentang Kami
                            <ChevronRight class="group-hover:rotate-90 transition-all" />
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

                    <li class="relative group" @mouseover="toggleDropdown('paket')" @mouseleave="activeDropdown = null">
                        <button @click="toggleDropdown('paket')"
                            class="text-gray-700 flex items-center justify-center focus:outline-none">
                            Paket
                            <ChevronRight class="group-hover:rotate-90 transition-all" />

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
                    <li class="relative group" @mouseover="toggleDropdown('promo')" @mouseleave="activeDropdown = null">
                        <button @click="toggleDropdown('promo')"
                            class="text-gray-700 flex items-center justify-center focus:outline-none">
                            Promo
                            <ChevronRight class="group-hover:rotate-90 transition-all" />
                        </button>
                        <ul v-show="activeDropdown === 'promo'"
                            class="absolute top-full mt-2 bg-white shadow rounded w-40 z-50 text-sm text-gray-700 font-normal">
                            <li>
                                <RouterLink to="/asd1" class="block  px-4 py-2 hover:bg-gray-100">Company Profile
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
                </ul>
            </div>
            <div class="flex gap-4">
                <RouterLink to="/login"
                    class="border-2 font-button hover:bg-[#34AF5B] hover:text-white transition-colors border-[#34AF5B] flex items-center text-[#34AF5B] font-bold px-4 py-2 rounded-4xl">
                    Unduh Aplikasi
                </RouterLink>
                <RouterLink to="/login"
                    class="font-button hover:bg-white border-[#34AF5B] hover:text-[#34AF5B] transition-colors border-2 hover:border-[#34AF5B] bg-[#34AF5B] font-bold text-white px-6 py-2 rounded-4xl">
                    Login
                </RouterLink>
            </div>
        </div>
    </nav>
    <nav class=" h-full z-[99] fixed top-0 left-0 w-full transition-transform duration-500"
        :class="showSidebar ? 'translate-x-0' : '-translate-x-full'">
        <ul class="flex flex-col gap-2 p-5 z-[100] bg-white h-full">
            <PanelLeftCloseIcon @click="toggleSidebar(false)" class="fixed right-5 top-5 text-[#34AF5B]" />
            <div class="hidden lg:block">
                <img src="@/assets/logo.svg" alt="Logo" class="w-16 h-16 mx-auto mb-4" />
            </div>
            <li>
                <RouterLink to="/" class="hover:text-[#34AF5B] text-gray-700">Beranda</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-[#34AF5B] text-gray-700">Tentang Kami</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-[#34AF5B] text-gray-700">Paket</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-[#34AF5B] text-gray-700">Promo</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-[#34AF5B] text-gray-700">Galeri</RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-[#34AF5B] text-gray-700">Artikel</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronRight, Menu, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TwitterIcon, PanelLeftCloseIcon } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
const activeDropdown = ref<string | null>(null)
const showSidebar = ref<boolean>(false)
const showPromo = ref<boolean>(true)

function toggleDropdown(name: string) {
    activeDropdown.value = activeDropdown.value === name ? null : name
}
function toggleSidebar(open: boolean) {
    showSidebar.value = open
}

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        showPromo.value = false;
    } else {
        showPromo.value = true;
    }
    lastScrollY = window.scrollY;
});

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
