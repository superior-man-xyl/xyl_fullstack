import React from "react";
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Index from './Pages/Index'
//--关键代码------------start
import Video from './Pages/video'
//--关键代码------------end
import WorkPlace from './Pages/workplace'

import './index.css'

function AppRouter() {
  //模拟远端请求数据，不写死代码,和小程序一样
  let routeConfig =[
    {path:'/',title:'博客首页',exact:true,component:Index},
    {path:'/video/',title:'视频教程',exact:false,component:Video},
    {path:'/workplace/',title:'职场技能',exact:false,component:WorkPlace}
  ]
    return (
      <Router>
          <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    {
                      routeConfig.map((item,index)=>{
                        //在循环中没有key就会报警告，但也不介意使用index
                          return (<li key={index}> <Link to={item.path}>{item.title}</Link> </li>)
                      })
                    }
                    {/* <li> <Link to="/">博客首页</Link> </li> */}
                    {/*--关键代码------------start*/}
                    {/* <li><Link to="/video/">视频教程</Link> </li> */}
                    {/*--关键代码------------end*/}
                    {/* <li><Link to="/workplace/">职场技能</Link> </li> */}
                </ul>
            </div>

            <div className="rightMain">
              {
                routeConfig.map((item,index)=>{
                  return (
                    <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                  )
                })
              }
                {/* <Route path="/"  exact component={Index} /> */}
                 {/*--关键代码------------start*/}
                {/* <Route path="/video/"   component={Video} /> */}
                 {/*--关键代码------------end*/}
                 {/* <Route path="/workplace/"   component={WorkPlace} /> */}
            </div>
          </div>
      </Router>
    );
  }

  export default AppRouter;