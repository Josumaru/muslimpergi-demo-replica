<template>
    <div class="bg-white rounded-xl h-60 flex flex-col text-center p-6 shadow-md">
      <!-- Logo -->
      <div class="mb-4">
        <slot name="icon" />
      </div>
  
      <!-- Title -->
      <h3 class="text-xl text-black font-bold mb-10 text-left pb-3">
        <slot name="title" />
      </h3>
  
      <!-- Description -->
      <p class=" text-black font-bold text-sm text-left">
        <slot name="description" />
      </p>
    </div>
  </template>

<script setup lang="ts">

</script>

<style scoped>

</style>