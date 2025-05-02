<template>
    <div class="bg-white py-10">
        <div class="flex z-20 items-center justify-center gap-4 flex-col">
            <OvalTag bg-color="#34AF5B" text-color="#FFFFFF">
                <template #title>
                    Article
                </template>
            </OvalTag>
            <p class="text-[#4AA055] z-20 text-center text-5xl font-title mt-4">Artikel & Informasi</p>
            <p class="text-black mt-2 text-center">Dapatkan informasi terbaru seputar ibadah umroh dan haji</p>
        </div>
        <div class="w-full flex items-center pt-10 justify-center ">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4 container">
                <template v-for="(card, index) in articles" :key="`article-${index}`">
                    <ArticleCard :title="card.title" :date="card.date" :content="card.content" />
                </template>
            </div>
        </div>
        <div class="w-full flex items-center justify-center py-10">
            <MoreButton to="/">
                Lihat Semua Artikel
            </MoreButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import OvalTag from '../common/OvalTag.vue';
import ArticleCard from './ArticleCard.vue';
import MoreButton from '../common/MoreButton.vue';
const articles = [
    {
        title: "Tips Tetap Sehat Saat Umroh",
        date: "10 April 2025",
        content: "Panduan Umroh untuk Pemula: Persiapan yang Wajib Diketahui Melaksanakan ibadah umroh adalah impian banyak umat Muslim. Namun bagi pemula, sering kali muncul kebingungan dalam mempersiapkannya. Pertama, pastikan Anda memiliki paspor yang masih berlaku minimal 6 bulan dan lakukan vaksin meningitis sesuai syarat dari pemerintah Arab Saudi. Kedua, pilih biro perjalanan umroh resmi dan terpercaya agar perjalanan Anda aman dan nyaman. Siapkan perlengkapan pribadi secukupnya, seperti pakaian ihram, sandal jepit, obat-obatan pribadi, serta alat ibadah. Tak kalah penting, bekali diri dengan ilmu manasik umroh sebelum berangkat agar ibadah lebih khusyuk. Dengan persiapan yang matang, perjalanan spiritual Anda akan lebih bermakna dan lancar, insyaAllah. Keutamaan Ibadah Umroh di Bulan Ramadhan Ibadah umroh di bulan Ramadhan memiliki keutamaan yang luar biasa. Rasulullah SAW bersabda, “Umrah di bulan Ramadhan senilai dengan haji bersamaku.” (HR. Bukhari dan Muslim). Artinya, pahala umroh yang dilakukan di bulan suci ini sangat besar, bahkan setara dengan haji dari segi keutamaannya — meskipun secara hukum dan kewajiban tetap berbeda. Suasana Ramadhan di Tanah Suci juga sangat istimewa: jamaah berkumpul untuk berbuka puasa bersama di Masjidil Haram, tarawih yang khusyuk, dan suasana penuh keberkahan. Bagi yang memiliki niat dan kemampuan, ini adalah waktu terbaik untuk mendekatkan diri kepada Allah SWT melalui umroh Ramadhan. Tips Tetap Sehat Saat Menjalankan Ibadah Umroh Kondisi fisik yang prima sangat penting selama menjalankan ibadah umroh. Perjalanan dan aktivitas ibadah yang padat bisa melelahkan jika tidak disiapkan dengan baik. Pastikan Anda cukup tidur, banyak minum air putih untuk menghindari dehidrasi, dan konsumsi makanan bergizi selama di Tanah Suci. Bawa obat-obatan pribadi serta vitamin yang biasa Anda konsumsi di rumah. Gunakan masker saat berada di tempat ramai untuk mencegah paparan debu atau virus. Hindari memaksakan diri jika merasa lelah – istirahat sejenak dan lanjutkan ibadah saat kondisi pulih. Menjaga kesehatan adalah bagian dari menjaga amanah tubuh yang Allah titipkan kepada kita.",
    },
    {
        title: "Tips Tetap Sehat Saat Umroh",
        date: "10 April 2025",
        content: "Panduan Umroh untuk Pemula: Persiapan yang Wajib Diketahui Melaksanakan ibadah umroh adalah impian banyak umat Muslim. Namun bagi pemula, sering kali muncul kebingungan dalam mempersiapkannya. Pertama, pastikan Anda memiliki paspor yang masih berlaku minimal 6 bulan dan lakukan vaksin meningitis sesuai syarat dari pemerintah Arab Saudi. Kedua, pilih biro perjalanan umroh resmi dan terpercaya agar perjalanan Anda aman dan nyaman. Siapkan perlengkapan pribadi secukupnya, seperti pakaian ihram, sandal jepit, obat-obatan pribadi, serta alat ibadah. Tak kalah penting, bekali diri dengan ilmu manasik umroh sebelum berangkat agar ibadah lebih khusyuk. Dengan persiapan yang matang, perjalanan spiritual Anda akan lebih bermakna dan lancar, insyaAllah. Keutamaan Ibadah Umroh di Bulan Ramadhan Ibadah umroh di bulan Ramadhan memiliki keutamaan yang luar biasa. Rasulullah SAW bersabda, “Umrah di bulan Ramadhan senilai dengan haji bersamaku.” (HR. Bukhari dan Muslim). Artinya, pahala umroh yang dilakukan di bulan suci ini sangat besar, bahkan setara dengan haji dari segi keutamaannya — meskipun secara hukum dan kewajiban tetap berbeda. Suasana Ramadhan di Tanah Suci juga sangat istimewa: jamaah berkumpul untuk berbuka puasa bersama di Masjidil Haram, tarawih yang khusyuk, dan suasana penuh keberkahan. Bagi yang memiliki niat dan kemampuan, ini adalah waktu terbaik untuk mendekatkan diri kepada Allah SWT melalui umroh Ramadhan. Tips Tetap Sehat Saat Menjalankan Ibadah Umroh Kondisi fisik yang prima sangat penting selama menjalankan ibadah umroh. Perjalanan dan aktivitas ibadah yang padat bisa melelahkan jika tidak disiapkan dengan baik. Pastikan Anda cukup tidur, banyak minum air putih untuk menghindari dehidrasi, dan konsumsi makanan bergizi selama di Tanah Suci. Bawa obat-obatan pribadi serta vitamin yang biasa Anda konsumsi di rumah. Gunakan masker saat berada di tempat ramai untuk mencegah paparan debu atau virus. Hindari memaksakan diri jika merasa lelah – istirahat sejenak dan lanjutkan ibadah saat kondisi pulih. Menjaga kesehatan adalah bagian dari menjaga amanah tubuh yang Allah titipkan kepada kita.",
    },
    {
        title: "Tips Tetap Sehat Saat Umroh",
        date: "10 April 2025",
        content: "Panduan Umroh untuk Pemula: Persiapan yang Wajib Diketahui Melaksanakan ibadah umroh adalah impian banyak umat Muslim. Namun bagi pemula, sering kali muncul kebingungan dalam mempersiapkannya. Pertama, pastikan Anda memiliki paspor yang masih berlaku minimal 6 bulan dan lakukan vaksin meningitis sesuai syarat dari pemerintah Arab Saudi. Kedua, pilih biro perjalanan umroh resmi dan terpercaya agar perjalanan Anda aman dan nyaman. Siapkan perlengkapan pribadi secukupnya, seperti pakaian ihram, sandal jepit, obat-obatan pribadi, serta alat ibadah. Tak kalah penting, bekali diri dengan ilmu manasik umroh sebelum berangkat agar ibadah lebih khusyuk. Dengan persiapan yang matang, perjalanan spiritual Anda akan lebih bermakna dan lancar, insyaAllah. Keutamaan Ibadah Umroh di Bulan Ramadhan Ibadah umroh di bulan Ramadhan memiliki keutamaan yang luar biasa. Rasulullah SAW bersabda, “Umrah di bulan Ramadhan senilai dengan haji bersamaku.” (HR. Bukhari dan Muslim). Artinya, pahala umroh yang dilakukan di bulan suci ini sangat besar, bahkan setara dengan haji dari segi keutamaannya — meskipun secara hukum dan kewajiban tetap berbeda. Suasana Ramadhan di Tanah Suci juga sangat istimewa: jamaah berkumpul untuk berbuka puasa bersama di Masjidil Haram, tarawih yang khusyuk, dan suasana penuh keberkahan. Bagi yang memiliki niat dan kemampuan, ini adalah waktu terbaik untuk mendekatkan diri kepada Allah SWT melalui umroh Ramadhan. Tips Tetap Sehat Saat Menjalankan Ibadah Umroh Kondisi fisik yang prima sangat penting selama menjalankan ibadah umroh. Perjalanan dan aktivitas ibadah yang padat bisa melelahkan jika tidak disiapkan dengan baik. Pastikan Anda cukup tidur, banyak minum air putih untuk menghindari dehidrasi, dan konsumsi makanan bergizi selama di Tanah Suci. Bawa obat-obatan pribadi serta vitamin yang biasa Anda konsumsi di rumah. Gunakan masker saat berada di tempat ramai untuk mencegah paparan debu atau virus. Hindari memaksakan diri jika merasa lelah – istirahat sejenak dan lanjutkan ibadah saat kondisi pulih. Menjaga kesehatan adalah bagian dari menjaga amanah tubuh yang Allah titipkan kepada kita.",
    }
]
</script>

<style scoped>
.font-title {
    font-weight: 600;
}
</style>
