import {createRouter, createWebHistory} from "vue-router";

import homePageIndex from '../components/pages/home/index.vue';
// import indexDK_A from  '../components/DK_A/home/index.vue';
import notFound from '../components/notFound.vue';


const routes = [
    // Pages
    {
        path: "/",
        component: homePageIndex
    },

    // 111ДК 1 А
    {
        // path: "/DK_A",
        path: '/DK_A/home',
        name: 'DK_A',
        // component: indexDK_A
        component: ()=> import('../components/DK_A/home/index.vue')
    },
    {
        path: '/DK_A/pressure',
        name: 'DK_A_pressure',
        // component: DK_A
        component: ()=> import('../components/DK_A/pressure.vue')
    },

    // Маршруты для насосов Н1
    {
        path: '/DK_A/table',
        name: 'DK_A_table',
        // component: DK_A
        component: ()=> import('../components/MGK/H1/A/table.vue')
    },

    // Маршрут для несуществующего пути
    {
    path: '/:pathMatch(.*)*',
        component: notFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // routes: [
    // ]
});

export default router
