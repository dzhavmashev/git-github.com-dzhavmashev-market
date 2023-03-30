import MainPages from '@/pages/MainPages.vue'
import AdressPage from '@/pages/AdressPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPages
    },
    {
        path: '/Adresses',
        component: AdressPage
    }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
