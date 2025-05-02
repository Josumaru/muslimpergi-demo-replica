<template>
    <div class="text-black flex items-center justify-center flex-col">
        <div class="container flex items-center justify-end flex-col gap-4 py-20">
            <p class="text-4xl font-title">Tim Kami</p>
            <p>Kenali tim profesional yang akan membantu perjalanan ibadah Anda</p>
            <div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    <div v-for="(team, index) in teams" :key="index" class="flex flex-col items-center justify-center">
                        <div class=" h-36 w-36 bg-gray-300 rounded-full">
                        </div>
                        <h3 class="text-xl font-title ">{{ team.name }}</h3>
                        <p class="text-[#32FF00]">{{ team.position }}</p>
                        <p class="mt-2 text-center text-gray-700">{{ team.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const teams = [
    {
        name: 'Ahmad Fauzi',
        position: 'Direktur Utama',
        description: "Berpengalaman lebih dari 20 tahun dalam industri travel haji dan umrah",
    },
    {
        name: 'Siti Aminah',
        position: 'Manajer Operasional',
        description: "Ahli dalam koordinasi dan manajemen perjalanan ibadah",

    },
    {
        name: 'Budi Santoso',
        position: 'Pembimbing Ibadah Senior',
        description: "Lulusan Al-Azhar dengan pemahaman mendalam tentang manasik",
    },
    {
        name: 'Fatimah Zahra',
        position: 'Manajer Layanan Pelanggan',
        description: "Berdedikasi untuk memberikan pengalaman terbaik bagi jamaah",
    },
]

</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>