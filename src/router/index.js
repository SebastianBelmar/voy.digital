import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../modules/home/router/index'

const routes = [
    {
        path: '/',
        ...home
    },
    {
        path: '/',
        redirect: { name: 'welcome', params: {}  },
    },        
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
    },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router