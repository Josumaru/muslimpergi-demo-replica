<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/common/NavigationBar.vue'
import FooterSection from './components/common/FooterSection.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>


<style scoped></style>
