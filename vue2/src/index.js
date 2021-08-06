import Vue from 'vue';
import App from './App.vue';
import router from './router'
// import { Button } from 'element-ui';
// Vue.use(Button);
import 'element-ui/lib/theme-chalk/index.css';
new Vue({
    render: (h) => h(App),
    router
}).$mount('#app');