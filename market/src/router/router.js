import MainPages from '@/pages/MainPages.vue'
// import ModalWindow from '@/Ui/ModalWindow.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPages
    },
    // {
    //     path: '/modal-window',
    //     component: ModalWindow
    // }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router