//useEffect 的使用介绍  代替常用生命周期函数
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import React, { useState,Fragment,useEffect } from 'react';
function App(){
    const [count,setCount]=useState(0);//数组解构
    //hooks中生命周期用法，一个useEffect就代替了几个生命周期
    useEffect(()=>{
        console.log(`你点击了${count}次`);
    })
    return(
        <Fragment>
            <div>this is {count} times</div>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/" component={List}/>
            </Router>
        </Fragment>
    )
}

function Index(){
    useEffect(()=>{
        console.log("useEffect=>hello!首页");
        //生命周期解绑，以使用的到卸载componentWillUnmount
        return ()=>{
            console.log("byebye！首页");
        }
    },[])//使用useEffect的第二个参数
    // 数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，
    // 我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑，
    // 这也就实现了componentWillUnmount的生命周期函数。
    return (
        <h2>这是首页</h2>
    )
}
function List(){
    useEffect(()=>{
        console.log("useEffect=>hello!列表页");
    })
    return(
        <h2>这是列表页</h2>
    )
}

export default App;
