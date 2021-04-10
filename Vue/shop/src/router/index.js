import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'//@就是表示src
import Login from '@/views/Login'
//配置路由
const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: ()=>import('@/views/Login.vue')//做一个按需加载
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: about
  // }//有一百个这样的页面，就放一百个这样的，或把数组放到另一个文件里
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
