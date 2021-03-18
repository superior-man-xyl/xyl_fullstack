import React, { useState,Fragment,createContext,useContext } from 'react';
const countContext = createContext();//使用createContext得到一个组件

function Counter(){
    let count=useContext(countContext);//createContext和useContext联合使用
    return(<h2>{count}</h2>);//使用useContent来获得上下文数据
}

function App(){
    const [count,setCount]=useState(0);//数组解构
    return(
        <Fragment>
            <div>this is {count} times</div>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <countContext.Provider value={count}>
                <Counter />
                {/* countContext.Provider:表示提供器 */}
            </countContext.Provider>
        </Fragment>
    )
}
 
export default App;