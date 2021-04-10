import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'//@就是表示src
//配置路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }//有一百个这样的页面，就放一百个这样的，或把数组放到另一个文件里
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
