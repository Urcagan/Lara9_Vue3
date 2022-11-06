import {createRouter, createWebHistory} from "vue-router";

import homeAdminIndex from '../components/admin/home/index.vue'

import homePageIndex from '../components/pages/home/index.vue'

import notFound from '../components/notFound.vue'

const routes = [

    // Admin
    {
        path: '/admin/home',
        component: homeAdminIndex
    },

    // Pages
    {
        path: '/',
        component: homePageIndex
    },

    // not Fount
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
