<template>
    <div class="max-w-md flex-shrink-0 w-full relative p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
        <div class="flex space-x-1 text-yellow-400 mb-2">
            <Star v-for="i in rating" :key="i" class="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        </div>
        <div class="w-full flex">
            <p class="text-gray-700 h-40 dark:text-zinc-200">
                "{{ text }}"
            </p>
        </div>

        <div class="flex gap-3 items-center">
            <div class="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
            <div>
                <p class="font-semibold dark:text-zinc-200 text-gray-900">{{ name }}</p>
                <p class="text-sm dark:text-zinc-200 text-gray-600">{{ location }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'

defineProps({
    rating: {
        type: Number,
        default: 5
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})
</script>