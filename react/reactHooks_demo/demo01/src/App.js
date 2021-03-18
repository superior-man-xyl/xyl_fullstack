//react hooks 的写法，只使用函数的形式，不再像原始方式那样，分为什么有状态无状态

import React, { useState,Fragment } from 'react';
function App(){
    const [count,setCount]=useState(0);//数组解构
    return(
        <Fragment>
            <div>this is {count} times</div>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </Fragment>
    )
}
 
export default App;