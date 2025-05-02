<script setup lang="ts">

import LegalitasSection from '@/components/about-us/LegalitasSection.vue';
import OurTeamSection from '@/components/about-us/OurTeamSection.vue';
import VisiMisiSection from '@/components/about-us/VisiMisiSection.vue';
import WhatsAppActionButton from '@/components/common/WhatsAppActionButton.vue'
import HeroAbout from '@/components/about-us/HeroAbout.vue';
import AboutDesc from '@/components/about-us/AboutDesc.vue';
</script>

<template>
    <main>
        <HeroAbout/>
        <AboutDesc />
        <VisiMisiSection />
        <OurTeamSection />
        <LegalitasSection />
        <WhatsAppActionButton />
    </main>
</template>
