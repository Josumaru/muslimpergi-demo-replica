<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/common/NavigationBar.vue'
import FooterSection from './components/common/FooterSection.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>


<style scoped></style>
