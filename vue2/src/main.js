import Vue from 'vue';
import App from './App.vue';
import router from './router'
// import { Button } from 'element-ui';
// Vue.use(Button);
import 'element-ui/lib/theme-chalk/index.css';
window.__MICRO_WEB__ = true
let uninstall = null
const render = () => {
    uninstall = new Vue({
        render: (h) => h(App),
        router
    }).$mount('#app');
}
if(!window.__MICRO_WEB__){
    render()
}
export const bootstrap = () => {
    console.log('开始加载')
    render()
}

export const mount = () => {
    console.log('渲染')
}
export const update = () => {
    console.log('更新')
}
export const unmount = () => {
    console.log('卸载', uninstall)
    uninstall.$destroy()
}
    
