import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/paket',
      name: 'paket',
      component: () => import('../views/PaketView.vue'),
    },
    {
      path: '/promo',
      name: 'promo',
      component: () => import('../views/PromoView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
    },
    {
      path: '/article/:id',
      name: 'detail',
      component: () => import('../views/ArticleDetailView.vue'),
    },
  ],
})

export default router
