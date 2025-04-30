<script setup lang="ts">
defineProps({
  bgColor: {
    type: String,
    default: '#FFFFFF', // default putih
  },
  textColor: {
    type: String,
    default: '#34AF5B', // default hijau
  },
});
</script>

<template>
  <div
    class="inline-block px-4 py-1 rounded-full shadow-md"
    :style="{ backgroundColor: bgColor }"
  >
    <p
      class="text-sm text-left p-1"
      :style="{ color: textColor }"
    >
      <slot name="title" />
    </p>
  </div>
</template>