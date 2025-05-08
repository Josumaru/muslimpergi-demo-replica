import { createI18n } from 'vue-i18n'

export const i18nConfig = createI18n({
  locale: 'id',
  fallbackLocale: 'en',
  messages: {
    id: {
      navbar: {
        beranda: ' Beranda',
        tentangKami: 'Tentang Kami',
        paket: 'Paket,',
        promo: 'Promo,',
        galeri: 'Galeri,',
        artikel: 'Artikel,',
      },
    },
    en: {
      navbar: {
        beranda: 'Home',
        tentangKami: 'Tentang Kami',
        paket: 'Paket,',
        promo: 'Promo,',
        galeri: 'Galeri,',
        artikel: 'Artikel,',
      },
    },
  },
})
