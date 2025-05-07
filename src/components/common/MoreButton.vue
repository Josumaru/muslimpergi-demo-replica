<template>
    <RouterLink :to="to"
        class="dark:text-white text-black font-subtitle group transition-transform flex items-center router-link justify-center hover:bg-[#4AA055] hover:text-white hover: border-[2.5px] font-bold border-[#4AA055] rounded-lg p-2">
        <slot />
        <ChevronRight class="transition-transform duration-200 group-hover:translate-x-1" />
    </RouterLink>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps({
    to: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.font-subtitle {
    font-weight: 500;
}
</style>