import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
   {
       path: '/',
       component: import('@/views/home.vue' /* webpackChunkName: "main-home" */)
   }
]
// import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({left: 0, top: 0})
})

export default router