import {MicroRouterProps} from './interface'
/**
 * @description 子应用注册微前端
 */
export const router: MicroRouterProps[] = [
   {
     name: 'react17',
     activeRule: '/react17',
     container: '#micro-container'
   },
   {
    name: 'vue3',
    activeRule: '/vue3',
    container: '#micro-container'
   },
   {
    name: 'vue2',
    activeRule: '/vue2',
    container: '#micro-container'
   }
]