// webpack 的入口文件  #root 这是我们的真实DOM  App根组件
import React from 'react';//史上最强的MVVM开发框架
import {render} from 'react-dom'
//就像是在小程序的app.json中配置路由
// Router 每个路由就代表一条路由配置规则
import {BrowserRouter,Route, Router} from 'react-router-dom';
import Main from './components/Main';//引入这两个组件
import Beer from './components/Beer';
import './index.css';//全局的css
//路由的配置
const Root=function(){
  return(//BrowserRouter？做一个浏览器的路由说明
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Main}></Route>
      {/*exact:精确匹配(就不会beer和Main都显示，因为/beer里一部分就是/) router里就是匹配规则
      这个path就是http://localhost:3000/beer */}
      <Route exact path="/beer" component={Beer}></Route>
    </div>
    </BrowserRouter>
  )
}

//react 小程序和vue 这些MVVM 是能不去操作DOM就不去操作，他们有自己的机制去操作页面，优化
render(<Root />,document.getElementById('root'));//有且只有一处DOM，就是这里