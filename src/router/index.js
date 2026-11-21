import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Cadastros from '../components/Cadastros.vue'
import Movimentacoes from '../components/Movimentacoes.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cadastros',
        name: 'cadastros',
        component: Cadastros
    },
    {
        path: '/movimentacoes',
        name: 'movimentacoes',
        component: Movimentacoes
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router