import MainPages from '@/pages/MainPages.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainPages,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
