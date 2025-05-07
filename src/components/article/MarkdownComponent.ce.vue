<template>
    <div v-html="markdown.render(src)"></div>
</template>

<script setup lang="ts">

import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";
defineOptions({
    customElement: true,
});

const src = `
# Panduan Persiapan Umrah

**Umrah** adalah ibadah yang dilakukan dengan mengunjungi Baitullah (Ka'bah) untuk melaksanakan serangkaian ibadah dengan syarat-syarat tertentu. Berbeda dengan haji, umrah dapat dilakukan kapan saja sepanjang tahun.

---

## 📄 Persiapan Dokumen

Sebelum berangkat umrah, pastikan Anda telah mempersiapkan dokumen-dokumen berikut:

- Paspor dengan masa berlaku minimal 6 bulan dari tanggal keberangkatan
- Visa umrah
- Tiket pesawat PP
- Surat keterangan sehat dan bukti vaksinasi
- Pas foto dengan latar belakang putih
- KTP dan Kartu Keluarga

---

## 💪 Persiapan Fisik

Ibadah umrah membutuhkan kondisi fisik yang prima. Berikut beberapa tips untuk mempersiapkan fisik Anda:

- Mulai berolahraga ringan secara rutin 2-3 bulan sebelum keberangkatan
- Jaga pola makan dan konsumsi makanan bergizi
- Periksakan kesehatan ke dokter
- Jika memiliki penyakit tertentu, konsultasikan dengan dokter dan siapkan obat-obatan yang diperlukan

---

## 🧠 Persiapan Mental dan Spiritual

Persiapan mental dan spiritual tidak kalah pentingnya. Berikut beberapa hal yang perlu dipersiapkan:

- Pelajari manasik umrah dengan baik
- Hafalkan doa-doa yang diperlukan selama ibadah umrah
- Perbanyak membaca Al-Quran dan berdoa
- Luruskan niat untuk beribadah kepada Allah SWT
- Selesaikan urusan duniawi yang mungkin mengganggu kekhusyukan ibadah

---

## 🎒 Perlengkapan yang Perlu Dibawa

Berikut adalah perlengkapan yang sebaiknya Anda bawa saat umrah:

- Pakaian ihram untuk pria atau mukena dan pakaian berwarna putih untuk wanita
- Pakaian harian secukupnya (sebaiknya yang mudah kering)
- Perlengkapan mandi dan perawatan pribadi
- Obat-obatan pribadi
- Sandal atau sepatu yang nyaman untuk berjalan jauh
- Tas kecil untuk membawa barang saat tawaf dan sa'i
- Buku doa dan Al-Quran ukuran kecil
- Masker, hand sanitizer, dan vitamin

---

## 🕋 Tips Selama di Tanah Suci

Beberapa tips yang bermanfaat selama Anda berada di Tanah Suci:

- Selalu bawa botol minum untuk menghindari dehidrasi
- Jaga barang bawaan dengan baik, terutama di tempat ramai
- Selalu bersama rombongan dan ikuti arahan pembimbing
- Manfaatkan waktu sebaik mungkin untuk beribadah
- Jaga kesehatan dengan istirahat yang cukup
- Hormati budaya dan peraturan setempat

---

Dengan persiapan yang matang, insya Allah ibadah umrah Anda akan berjalan lancar dan khusyuk.  
**Semoga panduan ini bermanfaat bagi Anda yang akan menunaikan ibadah umrah untuk pertama kalinya.**
`

const markdown = new MarkdownIt()
    .use(MarkdownItAbbr)
    .use(MarkdownItAnchor)
    .use(MarkdownItFootnote)
    .use(MarkdownItHighlightjs)
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItTasklists)
    .use(MarkdownItTOC);

</script>

<style></style>
