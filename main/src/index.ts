import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 引入全局样式
import '@/assets/scss/index.scss'
import 'element-plus/lib/theme-chalk/index.css'
import {Register_Child_Micro} from '../Micro/register'
import {router as Micro_Child_Router} from '../Micro/router'
import {intercept} from '../Micro/intercept'
// 子应用注册
Register_Child_Micro(Micro_Child_Router)
intercept()
createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
