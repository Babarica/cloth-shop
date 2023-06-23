import { createRouter, createWebHistory } from 'vue-router'
import busket from '@/views/busket.vue'
import home from '@/views/home.vue'
import profile from '@/views/profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/busket',
      name: 'busket',
      component: busket
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
  ]
})

export default router
