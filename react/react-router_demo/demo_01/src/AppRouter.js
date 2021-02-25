import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

// function Index() {
//   return <h2>JSPang.com</h2>;
// }
//这上下两个组件写到专门的文件夹里去了。然后引入，引入后就相当于两个可用的函数
// function List() {
//   return <h2>List-Page</h2>;
// }

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/">列表</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/:id" component={List} />
        <Route path="/Home/" component={Home} />
    </Router>
  );
}
export default AppRouter;