export interface NavListProps{
    path: string;
    name: string
}
export const NavList: NavListProps[] = [
    {
        path: '/vue3/#/index',
        name: '首页'
    },
    {
        name: '资讯',
        path: '/react17/#/index'
    },
    {
        name: '视频',
        path: '/react17/#/video'
    },
    {
        name: '选车',
        path: '/vue3/#/selectCart'
    },
    {
        name: '新能源',
        path: '/vue2/#/energy'
    }
]