import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/Nav/NavAbout.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Nav/NavContact.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../components/Nav/NavReviews.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../components/Nav/NavProducts.vue')
    }
  ]
})

export default router
