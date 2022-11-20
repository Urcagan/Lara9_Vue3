import {createRouter, createWebHistory} from "vue-router";

import homePageIndex from '../components/pages/home/index.vue'

import notFound from '../components/notFound.vue'


const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    // routes
    routes: [
        // Pages
        {
            path: '/',
            component: homePageIndex
        },


        // 111ДК 1 А
        {
            path: '/DK_A/home',
            name: 'DK_A',
            // component: DK_A
            component: ()=> import('../components/DK_A/home/index.vue')
        },

        // not Fount
        {
            path: '/:pathMatch(.*)*',
            component: notFound
        }
    ]
})

export default router
