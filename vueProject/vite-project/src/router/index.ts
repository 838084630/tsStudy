import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';
// import Vue from 'vue';
// Vue.use(VueRouter)
import {App} from 'vue'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'start',
        component: () => import('../views/login/login.vue')
    },
    {
        path:'/login',
        name:'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path:'/map',
        name:'map',
        component: () => import('../components/map.vue')
    },
    {
        path:'/demo',
        name:'map',
        component: () => import('../components/demo.vue')
    },
    {
        path:'/homepage',
        name:'homepage',
        component: () => import('../views/homepage/homepage.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes //路由配置
})

export const initRouter = (app:App<Element>) => {
    app.use(router);
}
// export default router