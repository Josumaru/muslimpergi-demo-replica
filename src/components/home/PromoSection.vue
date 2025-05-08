<template>
    <div class="w-full flex items-center justify-center relative">
        <img src="@/assets/images/background/bg_circle_green.svg"
            class="w-full h-full object-cover absolute inset-0 z-0" />
        <div class="container px-4 pb-4 xl:pb-0 flex items-start pt-20 justify-between z-20">
            <div>
                <p class="text-white w-5/6 font-medium text-2xl md:text-3xl/14">{{ $t("promo.bismillah") }}
                    <span class="text-[#4AA055] whitespace-nowrap"> {{ $t("promo.getStarted") }}</span>{{
                        $t('promo.danSiapkan') }}
                    <span class="text-[#4AA055]">Umroh Amanah.</span>
                </p>
                <div class="flex flex-col md:flex-row gap-4">
                    <button
                        class="p-4 cursor-pointer px-9 font-button bg-[#4AA055] rounded-full font-bold text-white text-xl">
                        {{ $t('promo.getStarted') }}</button>
                    <button
                        class="p-4 px-9 font-button items-center justify-center cursor-pointer bg-white text-[#4AA055] rounded-full font-bold text-xl flex gap-2">{{
                            $t('promo.getApp') }}
                        <img src="@/assets/icons/google-play-store.svg" alt="Google Play" class="w-8 h-8">
                        <img src="@/assets/icons/apple-black.svg" alt="App Store" class="w-8 h-8">
                    </button>
                </div>
            </div>
            <img class="hidden xl:block" src="@/assets/images/ba.png" alt="Promo Image">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
.font-button {
    font-weight: 600;
}
</style>