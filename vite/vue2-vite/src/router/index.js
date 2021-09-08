import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由插件
Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'energy',
    component: () => import('@/views/energy.vue')
   }
]
const router = new VueRouter({
    mode: 'hash',
    routes
  })
  
export default router