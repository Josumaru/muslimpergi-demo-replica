// MyIsolatedComponent.ce.vue
<template>
    <div class="container ">
        <h1 class="">Ini bebas dari Tailwind</h1>
        <p>Stylenya gak kena reset</p>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    // penting! aktifkan shadow DOM
    customElement: true,
});
</script>

<style>
h1 {
    font-size: 2em;
    color: red;
}
</style>
