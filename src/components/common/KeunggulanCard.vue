<template>
  <div class="bg-white rounded-xl h-70 w-full flex flex-col text-center shadow-md ">

    <div class="bg-[#34AF5B] h-30 rounded-t-xl shadow-4xl flex items-center justify-center shadow-xl/20"> <!-- Logo -->
      <div class="mx auto">
        <slot name="icon" />
      </div>
    </div>

    <div class="pl-4 pt-2">
      <!-- Title -->
      <h3 class="text-xl text-black mb-10 text-left pt-2 pb-2" id="title">
        <slot name="title" />
      </h3>

      <!-- Description -->
      <p class=" text-black text-sm text-left pr-3" id="description">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#title {
  font-weight: bolder;
}
</style>
