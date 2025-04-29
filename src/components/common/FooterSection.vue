<template>
    <div class="bg-[#111827] w-full">
        <div class="w-full flex flex-col items-center justify-center">
            <div class="container grid grid-cols-4 gap-4 py-10">
                <div class="col-span-1 gap-4 flex flex-col">
                    <div class="flex items-center gap-1 justify-start">
                        <div class=" bg-white p-1 rounded-lg">
                            <img src="@/assets/logo.svg" alt="Logo" class="w-8 h-8">
                        </div>
                        <p class="font-title text-white text-xl">UmrohKu</p>
                    </div>
                    <p>Biro perjalanan umroh dan haji terpercaya dengan izin resmi Kementerian Agama RI No.
                        123/PPIU/2023</p>
                    <div class="flex gap-2 items-center justify-start">
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                        <Twitter />
                    </div>
                    <p>Anggota Resmi AMPHURI</p>
                </div>
                <div class="col-span-1">
                    <p class="text-white text-xl font-title ">Kontak Kami</p>
                    <div class="flex flex-col gap-4">
                        <div class="flex gap-2 items-center justify-start">
                            <Phone />
                            <p>+6281 1906 601</p>
                        </div>
                        <div class="flex gap-2 items-center justify-start">
                            <Mail />
                            <p>info@muslimpergi.com</p>
                        </div>
                        <div class="flex gap-2 items-center justify-start">
                            <MapPin class="w-9 h-9" />
                            <p>Jl. Bone Utama No.13C, Banyuanyar, Kec. Banjarsari, Kota Surakarta</p>
                        </div>
                    </div>
                    <p class="text-white pt-4 text-xl font-title ">Jam Operasional</p>
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
                    <p class="text-white text-xl font-title">Link Cepat</p>
                    <div class="flex flex-col gap-2">
                        <RouterLink to="/">Tentang Kami</RouterLink>
                        <RouterLink to="/">Paket Umroh</RouterLink>
                        <RouterLink to="/">Paket Haji</RouterLink>
                        <RouterLink to="/">Jadwal Keberangkatan</RouterLink>
                        <RouterLink to="/">Galeri</RouterLink>
                        <RouterLink to="/">Artikel</RouterLink>
                        <RouterLink to="/">FAQ</RouterLink>
                        <RouterLink to="/">Kontak</RouterLink>
                    </div>
                </div>
                <div class="col-span-1 gap-4 flex flex-col">
                    <p class="text-xl font-title text-white">Unduh Aplikasi</p>
                    <p>Dapatakan akses informasi dan layanan melalui UmrohKu</p>
                    <div
                        class="flex bg-white/10 border-[1px] items-center hover:bg-white/20 cursor-pointer border-white/20 p-3 gap-2 rounded-lg">
                        <img src="@/assets/icons/google-play-store.svg" alt="Google Play" class="w-6">
                        <p>Play Store</p>
                    </div>
                    <div
                        class="flex bg-white/10 border-[1px] items-center hover:bg-white/20 cursor-pointer border-white/20 p-3 gap-2 rounded-lg">
                        <img src="@/assets/icons/apple.svg" alt="Google Play" class="w-6">
                        <p>Play Store</p>
                    </div>
                    <p class="text-xl font-title text-white">Newsletter</p>
                    <p>Dapatakan info terbaru dan promo special</p>
                    <div class="flex gap-2">
                        <input type="text" placeholder="Masukkan email"
                            class="bg-white/10 border-[1px] border-white/20 p-3 rounded-lg w-full">
                        <button
                            class="bg-[#4AA055] flex-1 text-white p-3 rounded-lg w-full mt-2 hover:bg-[#4338ca]">Daftar</button>
                    </div>
                </div>
            </div>
            <div class="border-t-[1px] w-full flex items-center justify-center border-white/10">
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
