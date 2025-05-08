<template>
    <nav
        class="backdrop-blur-lg bg-white/60 dark:bg-black/60 flex-col transition-all duration-300 shadow-2xl drop-shadow-black rounded-b-3xl flex items-center justify-center fixed top-0 z-[99] w-full">
        <div :class="showPromo ? 'max-h-[100px] opacity-100' : 'max-h-0 hidden -translate-y-10'"
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
        <div class="container flex items-center  justify-between px-4 py-3">
            <div class="hidden xl:block">
                <img src="@/assets/logo.png" alt="Logo" class="w-16 h-16 dark:hidden mx-auto mb-4" />
                <img src="@/assets/logo-dark.png" alt="Logo" class="w-16 h-16  hidden dark:block mx-auto mb-4">
            </div>
            <Menu @click="toggleSidebar(true)" class="xl:hidden text-[#34AF5B]" />
            <div class="translate-x-24">
                <ul class="hidden text-gray-700 xl:flex gap-4 items-center justify-center font-medium text-lg">
                    <li>
                        <RouterLink to="/" class="text-gray-700 dark:text-white hover:text-[#34AF5B]">
                            {{ $t('navbar.beranda') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about-us" class="text-gray-700 dark:text-white hover:text-[#34AF5B]">Tentang
                            Kami
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/paket" class="text-gray-700 dark:text-white hover:text-[#34AF5B]">Paket
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/promo" class="text-gray-700 dark:text-white hover:text-[#34AF5B]">Promo
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/gallery" class="text-gray-700 dark:text-white hover:text-[#34AF5B]">Galeri
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/article" class="text-gray-700 dark:text-white hover:text-[#34AF5B]">Artikel
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex gap-4">
                <div class="flex text-2xl dark:text-white items-center justify-center text-black gap-2">
                    <div class="relative locale-changer group">
                        <button @click="toggleDropdown('lang')"
                            class="text-gray-700 cursor-pointer gap-2 dark:text-white hover:text-[#34AF5B] flex items-center justify-center focus:outline-none">
                            <LucideLanguages class="h-6 w-6" />
                            {{ $i18n.locale.toUpperCase() }}
                        </button>
                        <ul v-show="activeDropdown === 'lang'"
                            class="absolute top-full mt-2 overflow-hidden dark:text-white cursor-pointer shadow rounded w-40 z-50 text-sm text-gray-700 font-normal">
                            <li v-for="locale in $i18n.availableLocales"
                                class="p-2 dark:bg-zinc-900 bg-white dark:hover:bg-zinc-800 hover:bg-zinc-300"
                                :key="`locale-${locale}`" @click="changeLang(locale)" :value="locale">
                                {{ locale.toUpperCase() }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex dark:text-white items-center justify-center text-black">
                    <Sun @click="toggleDark()"
                        class="hover:text-[#34AF5B] dark:hidden block cursor-pointer transition-colors" />
                    <Moon @click="toggleDark()"
                        class="hover:text-[#34AF5B] hidden dark:block cursor-pointer transition-colors" />
                </div>
                <RouterLink to="/login"
                    class="border-2 font-button hover:bg-[#34AF5B] hover:text-white transition-colors border-[#34AF5B] flex items-center text-[#34AF5B] font-bold px-4 py-2 rounded-4xl">
                    Unduh Aplikasi
                </RouterLink>
                <RouterLink to="/login"
                    class="font-button hover:bg-transparent border-[#34AF5B] hover:text-[#34AF5B] transition-colors border-2 hover:border-[#34AF5B] bg-[#34AF5B] font-bold text-white px-6 py-2 rounded-4xl">
                    Login
                </RouterLink>
            </div>
        </div>
    </nav>
    <nav class="h-full max-w-sm z-[99] fixed top-0 left-0 w-full transition-transform duration-500"
        :class="showSidebar ? 'translate-x-0' : '-translate-x-full'">
        <ul class="flex flex-col gap-1 p-5 z-[100] bg-white dark:bg-zinc-900 h-full">
            <PanelLeftCloseIcon @click="toggleSidebar(false)" class="fixed right-5 top-5 text-[#34AF5B]" />
            <div class="block">
                <img src="@/assets/logo.png" alt="Logo" class="dark:hidden w-8 h-8 mx-auto mb-4" />
                <img src="@/assets/logo-dark.png" alt="Logo" class="w-8 dark:block hidden h-8 mx-auto mb-4" />
            </div>
            <li>
                <RouterLink @click="toggleSidebar(false)" to="/"
                    :class="isActive('/') ? 'dark:bg-zinc-800 bg-zinc-200' : ''"
                    class="hover:text-[#34AF5B] flex items-center dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-colors rounded-xl py-2 text-gray-700 gap-2 dark:text-gray-200">
                    <div :class="isActive('/') ? 'bg-[#34AF5B]' : 'bg-transparent'"
                        class="h-8 rounded-xl w-1 text-transparent" />
                    <House />
                    {{ $t('navbar.beranda') }}
                </RouterLink>
            </li>
            <li>
                <RouterLink @click="toggleSidebar(false)" to="/about-us"
                    :class="isActive('/about-us') ? 'dark:bg-zinc-800 bg-zinc-200' : ''"
                    class="hover:text-[#34AF5B] flex items-center dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-colors rounded-xl py-2 text-gray-700 gap-2 dark:text-gray-200">
                    <div :class="isActive('/about-us') ? 'bg-[#34AF5B]' : 'bg-transparent'"
                        class="h-8 rounded-xl w-1 text-transparent" />
                    <CircleHelp />
                    Tentang Kami
                </RouterLink>
            </li>
            <li>
                <RouterLink @click="toggleSidebar(false)" to="/paket"
                    :class="isActive('/paket') ? 'dark:bg-zinc-800 bg-zinc-200' : ''"
                    class="hover:text-[#34AF5B] flex items-center dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-colors rounded-xl py-2 text-gray-700 gap-2 dark:text-gray-200">
                    <div :class="isActive('/paket') ? 'bg-[#34AF5B]' : 'bg-transparent'"
                        class="h-8 rounded-xl w-1 text-transparent" />
                    <Package />
                    Paket
                </RouterLink>
            </li>
            <li>
                <RouterLink @click="toggleSidebar(false)" to="/promo"
                    :class="isActive('/promo') ? 'dark:bg-zinc-800 bg-zinc-200' : ''"
                    class="hover:text-[#34AF5B] flex items-center dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-colors rounded-xl py-2 text-gray-700 gap-2 dark:text-gray-200">
                    <div :class="isActive('/promo') ? 'bg-[#34AF5B]' : 'bg-transparent'"
                        class="h-8 rounded-xl w-1 text-transparent" />
                    <Proportions />
                    Promo
                </RouterLink>
            </li>
            <li>
                <RouterLink @click="toggleSidebar(false)" to="/gallery"
                    :class="isActive('/gallery') ? 'dark:bg-zinc-800 bg-zinc-200' : ''"
                    class="hover:text-[#34AF5B] flex items-center dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-colors rounded-xl py-2 text-gray-700 gap-2 dark:text-gray-200">
                    <div :class="isActive('/gallery') ? 'bg-[#34AF5B]' : 'bg-transparent'"
                        class="h-8 rounded-xl w-1 text-transparent" />
                    <Images />
                    Galeri
                </RouterLink>
            </li>
            <li>
                <RouterLink @click="toggleSidebar(false)" to="/article"
                    :class="isActive('/article') ? 'dark:bg-zinc-800 bg-zinc-200' : ''"
                    class="hover:text-[#34AF5B] flex items-center dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-colors rounded-xl py-2 text-gray-700 gap-2 dark:text-gray-200">
                    <div :class="isActive('/article') ? 'bg-[#34AF5B]' : 'bg-transparent'"
                        class="h-8 rounded-xl w-1 text-transparent" />
                    <Newspaper />
                    Artikel
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Newspaper, House, Menu, Images, Proportions, Package, CircleHelp, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TwitterIcon, PanelLeftCloseIcon, LucideLanguages, Sun, Moon } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
const activeDropdown = ref<string | null>(null)
const showSidebar = ref<boolean>(false)
const showPromo = ref<boolean>(true)

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { locale } = useI18n()
const route = useRoute()

function changeLang(lang) {
    toggleDropdown(null)
    locale.value = lang
}
function isActive(path: string) {
    return route.path === path
}
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
