<template>
    <div>
        <div class="rounded-[30px] overflow-hidden shadow-lg bg-white">
            <img src="@/assets/images/gallery/gallery_0.jpg" alt="Tips Umroh"
                class="w-full h-64 object-cover rounded-xl  overflow-hidden" />
            <div
                class="bg-[#74B47D] flex p-5 gap-4 text-black rounded-b-[30px] bg-[url('@/assets/images/background/bg_1.png')] bg-cover">
                <div class="h-auto shrink-0 rounded-xl bg-black w-[3px]" />
                <div>
                    <h2 class="text-2xl font-title mb-1">{{ title }}</h2>
                    <p class="text-xs mb-2 text-gray-800 font-title">Diterbitkan {{ date }}</p>
                    <p class="text-justify  leading-relaxed line-clamp-[5]">{{ content }}</p>
                    <p class="mt-2 font-bold text-sm font-title cursor-pointer">Baca Selengkapnya</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

});
</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>