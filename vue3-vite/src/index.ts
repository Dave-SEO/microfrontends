import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 引入全局样式
import '@/assets/scss/index.scss'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
