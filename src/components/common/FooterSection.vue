<template>
  <div class="bg-[#34AF5B] w-full">
    <div class="w-full flex flex-col items-center justify-center">
      <div class="container text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4 py-10">
        <div class="col-span-1 gap-4 flex flex-col">
          <div class="flex items-center gap-1 justify-start">
            <div class=" bg-white p-1 rounded-lg">
              <img src="@/assets/logo.png" alt="Logo" class="w-8 h-8">
            </div>
            <p class="font-title text-xl">Umroh Amanah</p>
          </div>
          <p>{{ $t('footer.izin') }}</p>
          <div class="flex gap-2 items-center justify-start">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Twitter />
          </div>
          <div>
            <img src="@/assets/images/amphuri.png" alt="Logo" class="bg-white w-[183px]">
            <p>{{ $t('footer.amphuri') }}</p>
          </div>
        </div>

        <div class="col-span-1">
          <p class="text-xl font-title">{{ $t('footer.kontakkami') }}</p>
          <div class="flex flex-col gap-4">
            <div class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline cursor-pointer flex gap-2 items-center justify-start">
              <Phone />
              <p>+6281 1906 601</p>
            </div>
            <div class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline flex gap-2 items-center justify-start cursor-pointer ">
              <Mail />
              <p>info@muslimpergi.com</p>
            </div>
            <div class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline flex gap-2 items-center justify-start cursor-pointer ">
              <MapPin class="w-9 h-9" />
              <p>Jl. Bone Utama No.13C, Banyuanyar, Kec. Banjarsari, Kota Surakarta</p>
            </div>
          </div>
          <p class="pt-4 text-xl font-title">{{ $t('footer.jamOperasional') }}</p>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center justify-start">
              <p>{{ $t('footer.hari1') }}</p>
              <p>08.00 - 17.00</p>
            </div>
            <div class="flex gap-2 items-center justify-start">
              <p>{{ $t('footer.hari2') }}</p>
              <p>08.00 - 12.00</p>
            </div>
            <div class="flex gap-2 items-center justify-start">
              <p>{{ $t('footer.hari3') }}</p>
              <p>{{ $t('footer.minggu') }}</p>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <p class="text-xl font-title">{{ $t('footer.linkcepat') }}</p>
          <div class="flex flex-col gap-2">
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/about-us">
              {{ $t('footer.linkcepat1') }}
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/paket">
              {{ $t('footer.linkcepat2') }}
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/paket">
              {{ $t('footer.linkcepat3') }}
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/paket">
              {{ $t('footer.linkcepat4') }}
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/gallery">
              {{ $t('footer.linkcepat5') }}
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/article">
              {{ $t('footer.linkcepat6') }}
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/">
              FAQ
            </RouterLink>
            <RouterLink class="hover:text-[#e6e6e6] transition-all duration-500 hover:underline" to="/">
              {{ $t('footer.linkcepat7') }}
            </RouterLink>
          </div>
        </div>

        <div class="col-span-1 gap-4 flex flex-col">
          <p class="text-xl font-title">{{ $t('footer.unduh') }}</p>
          <p>{{ $t('footer.appdesc') }}</p>
          <div class="flex items-center justify-center gap-2">
            <a target="_blank" href="https://www.apple.com/id/app-store/"
              class="flex w-full bg-black border-2 items-center cursor-pointer hover:bg-zinc-900 transition-colors border-gray-400 px-2 py-1 gap-2 rounded-lg">
              <img src="@/assets/icons/google-play-store.svg" alt="Google Play" class="w-6">
              <div>
                <p class="font-semibold text-xs">{{ $t('footer.dapatkan1') }}</p>
                <p class="font-semibold text-base">Google Play</p>
              </div>
            </a>
            <a target="_blank" href="https://www.apple.com/id/app-store/"
              class="flex w-full bg-black border-2 items-center cursor-pointer hover:bg-zinc-900 transition-colors border-gray-400 px-2 py-1 gap-2 rounded-lg">
              <img src="@/assets/icons/apple.svg" alt="Google Play" class="w-6">
              <div>
                <p class="font-semibold text-xs">{{ $t('footer.dapatkan2') }}</p>
                <p class="font-semibold text-base">App Store</p>
              </div>
            </a>
          </div>
          <p class="text-xl font-title">Newsletter</p>
          <p>{{ $t('footer.newsletterdesc') }}</p>
          <div class="flex gap-2">
            <input type="text" placeholder="Email Anda"
              class="bg-white/10 border-2 border-white placeholder:text-white focus-within:outline-0 focus:border-[#4DD32C] p-3 rounded-full w-full">
            <button
              class="bg-[#4DD32C] px-5 flex-1 p-3 rounded-full w-full mt-2 hover:bg-white transition-colors hover:text-[#34AF5B]">{{ $t('footer.daftar') }}</button>
          </div>
        </div>
      </div>

      <div class="border-t-[1px] bg-[#092B01] w-full flex items-center justify-center">
        <div class="container text-center p-10 text-[#d1d5cf] flex flex-col items-center justify-center">
          <p>{{ $t('footer.hakcipta') }}</p>
          <div class="flex gap-2">
            <p>{{ $t('footer.syarat') }}</p>
            <p>{{ $t('footer.kebijakan') }}</p>
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
