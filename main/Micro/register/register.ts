import {MicroRouterProps} from '../interface'
let MicroList: MicroRouterProps[] = []

/**
 * @description 注册子应用
 */
export const Register_Child_Micro = (list: MicroRouterProps[]) => MicroList = list

/**
 * 
 * @description 获取子应用列表 
 */
export const  GetChild_Micro = () => MicroList