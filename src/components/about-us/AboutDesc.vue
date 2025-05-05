<template>
  <div class="h-auto min-h-[600px] bg-white flex items-center justify-center px-6 md:px-20 py-10">
    <div class="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center md:items-start gap-8">

      <!-- KIRI: TEKS (akan di bawah di mobile, kiri di desktop) -->
      <div class="w-full md:w-1/2 md:pr-10">
        <p class="text-[#4DD32C] font-semibold mb-2" id="about">Tentang Kami</p>
        <p class="text-black font-bold text-lg leading-relaxed" id="title">
          Umroh Amanah – Sahabat Ibadah Anda ke Tanah Suci
        </p>
        <p class="text-black mt-4 text-justify leading-relaxed">
          <span class="font-bold">Umroh Amanah</span> adalah biro perjalanan ibadah Haji dan Umrah yang telah berdiri sejak tahun 2012
          dengan komitmen untuk menjadi sahabat terbaik Anda dalam menunaikan ibadah ke Tanah Suci. Dengan izin resmi dari
          Kementerian Agama Republik Indonesia, kami telah dipercaya melayani lebih dari 10.000 jamaah dari seluruh Indonesia.<br /><br />
          Kami memahami bahwa ibadah Haji dan Umrah bukan hanya sekadar perjalanan fisik, tetapi juga perjalanan spiritual
          yang penuh makna. Oleh karena itu, setiap layanan kami dirancang dengan penuh ketulusan, kenyamanan, dan keprofesionalan.
        </p>
      </div>

      <!-- KANAN: GAMBAR (akan di atas di mobile, kanan di desktop) -->
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="bg-gray-300 w-[250px] h-[300px] md:w-[350px] md:h-[400px] rounded-lg"></div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#about {
  font-weight: bold;
}

#title {
  font-weight: bold;
}
</style>
