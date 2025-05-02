<template>
    <div class="bg-[#34AF5B] w-full">
        <div class="w-full flex flex-col items-center justify-center">
            <div class="container text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4 py-10">
                <div class="col-span-1 gap-4 flex flex-col">
                    <div class="flex items-center gap-1 justify-start">
                        <div class=" bg-white p-1 rounded-lg">
                            <img src="@/assets/logo.svg" alt="Logo" class="w-8 h-8">
                        </div>
                        <p class="font-title  text-xl">UmrohKu</p>
                    </div>
                    <p class="">Biro perjalanan umroh dan haji terpercaya dengan izin resmi Kementerian Agama
                        RI No.
                        123/PPIU/2023</p>
                    <div class="flex  gap-2 items-center justify-start">
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                        <Twitter />
                    </div>
                    <div>
                        <img src="@/assets/images/amphuri.png" alt="Logo" class="bg-white">
                        <p class="">Anggota Resmi AMPHURI</p>
                    </div>
                </div>
                <div class="col-span-1">
                    <p class=" text-xl font-title">Kontak Kami</p>
                    <div class="flex flex-col gap-4">
                        <div class="hover: transition-colors cursor-pointer flex gap-2 items-center justify-start">
                            <Phone />
                            <p>+6281 1906 601</p>
                        </div>
                        <div class="flex gap-2 items-center justify-start hover: transition-colors cursor-pointer ">
                            <Mail />
                            <p>info@muslimpergi.com</p>
                        </div>
                        <div class="flex gap-2 items-center justify-start hover: transition-colors cursor-pointer ">
                            <MapPin class="w-9 h-9" />
                            <p>Jl. Bone Utama No.13C, Banyuanyar, Kec. Banjarsari, Kota Surakarta</p>
                        </div>
                    </div>
                    <p class=" pt-4 text-xl font-title">Jam Operasional</p>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-2 items-center justify-start">
                            <p>Senin - Jumat</p>
                            <p>08.00 - 17.00</p>
                        </div>
                        <div class="flex gap-2 items-center justify-start">
                            <p>Sabtu</p>
                            <p>08.00 - 12.00</p>
                        </div>
                        <div class="flex gap-2 items-center justify-start">
                            <p>Minggu</p>
                            <p>Tutup</p>
                        </div>
                    </div>

                </div>
                <div class="col-span-1">
                    <p class=" text-xl font-title">Link Cepat</p>
                    <div class="flex flex-col gap-2">
                        <RouterLink class="hover: transition-colors" to="/">Tentang Kami</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">Paket Umroh</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">Paket Haji</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">Jadwal Keberangkatan</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">Galeri</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">Artikel</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">FAQ</RouterLink>
                        <RouterLink class="hover: transition-colors" to="/">Kontak</RouterLink>
                    </div>
                </div>
                <div class="col-span-1 gap-4 flex flex-col">
                    <p class="text-xl font-title ">Unduh Aplikasi</p>
                    <p class="">Dapatakan akses informasi dan layanan melalui UmrohKu</p>
                    <div
                        class="flex bg-white/10 border-[1px] items-center hover:bg-white/20 cursor-pointer border-white/20 p-3 gap-2 rounded-lg">
                        <img src="@/assets/icons/google-play-store.svg" alt="Google Play" class="w-6">
                        <p class="">Play Store</p>
                    </div>
                    <div
                        class="flex bg-white/10 border-[1px] items-center hover:bg-white/20 cursor-pointer border-white/20 p-3 gap-2 rounded-lg">
                        <img src="@/assets/icons/apple.svg" alt="Google Play" class="w-6">
                        <p class="">Play Store</p>
                    </div>
                    <p class="text-xl font-title ">Newsletter</p>
                    <p class="">Dapatakan info terbaru dan promo special</p>
                    <div class="flex gap-2">
                        <input type="text" placeholder="Masukkan email"
                            class="bg-white/10 border-[1px] border-white/20 p-3 rounded-full w-full">
                        <button
                            class="bg-[#4DD32C] px-5 flex-1  p-3 rounded-full w-full mt-2 hover:bg-white transition-colors hover:text-[#34AF5B]">Daftar</button>
                    </div>
                </div>
            </div>
            <div class="border-t-[1px] bg-[#092B01] w-full flex items-center justify-center">
                <div class="container p-10 text-[#d1d5cf] flex flex-col items-center justify-center">
                    <p>© 2025 UmrohKu. Hak Cipta Dilindungi.</p>
                    <div class="flex gap-2">
                        <p>
                            Syarat & Ketentuan
                        </p>
                        <p>
                            Kebijakan Privasi
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<style lang="css" scoped>
.font-title {
    font-weight: 600;
}
</style>
