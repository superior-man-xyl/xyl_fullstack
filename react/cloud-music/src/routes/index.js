//路由配置文件
//向外输出一个routes路由的配置  前端路由

import React from 'react';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default[//App.js routes
    {
        path:'/',
        component:Home,
        routes:[
            // {
            //     path:'/',
            //     exact:true,
            //     component:Home
            // },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            },
            {
                path: '/rank',
                component: Rank
            }
        ]
    }
]