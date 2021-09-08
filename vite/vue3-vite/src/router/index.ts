import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const Home = () => import('@/views/home.vue'/* webpackChunkName: "home" */)
const SelectCart = () => import('@/views/selectCart.vue'/* webpackChunkName: "selectCart" */)
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/selectCart',
        component: SelectCart
    }
]
// import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({left: 0, top: 0})
})

export default router