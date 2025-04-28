<template>
    <nav class="bg-white rounded-b-3xl flex items-center justify-center fixed top-0 z-40 w-full">
        <div class="container flex items-center justify-between">
            <div>
                <img src="@/assets/logo.svg" alt="Logo" class="w-16 h-16 mx-auto mb-4" />
            </div>
            <div>
                <ul class="flex gap-4 items-center justify-center font-bold text-lg">
                    <li>
                        <RouterLink to="/" class="text-gray-700"> Beranda</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-700"> Tentang kami</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-700"> Paket Umroh</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-700"> Paket Haji</RouterLink>
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
                    class="border-2 border-[#34AF5B] text-[#34AF5B] font-bold px-4 py-2 rounded-4xl">
                    Unduh Aplikasi
                </RouterLink>
                <RouterLink to="/login" class="bg-[#34AF5B] font-bold text-white px-6 py-2 rounded-4xl">Login
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style lang=" css" scoped></style>
