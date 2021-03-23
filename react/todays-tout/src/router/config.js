import asyncComponent from './asyncComponent'

import NotFound from '../pages/Error/404'
// const _components = file=>asyncComponent(()=>import(`components/${file}`))
const _pages = file=>asyncComponent(()=>import(`../pages/${file}`))

export const layoutRouterMap = [
    {
        path:'/',
        name:'首页',
        exact:true,
        component:_pages('Home')
    },
    // {
    //     path:'/video',
    //     name:'视频',
    //     exact:true,
    //     component:_pages('Video')
    // },
    // {
    //     path:'/headline',
    //     name:'微头条',
    //     exact:true,
    //     component:_pages('Headline')
    // },
    // {
    //     path:'/account',
    //     name:'我的',
    //     exact:true,
    //     component:_pages('Account')
    // },
]

export const noLayoutRouterMap = [
    {
        path:'/404',
        name:'404',
        exact:true,
        component:NotFound
    },
    // {
    //     path:'/search',
    //     name:'搜索',
    //     exact:true,
    //     component:_pages('Search')
    // }
]

export const routers = layoutRouterMap.concat(noLayoutRouterMap)