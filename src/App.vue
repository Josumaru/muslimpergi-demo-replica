<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/common/NavigationBar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>


<style scoped></style>
