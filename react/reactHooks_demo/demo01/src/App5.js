//ReducerDemo 展示如何使用useReducer

import React, { useReducer,Fragment } from 'react';

function App(){
    const [count,dispatch]=useReducer((state,action)=>{
        switch(action){
            case "add":
                return state+1;
            break;
            case "sub":
                return state-1;
            break;
            default:
                return state;

        }
    },0)//初始值为0
    return (
        <Fragment>
            <div>现在的分数是 {count}</div>
            <button onClick={()=>{dispatch("add")}}>点击加一</button>
            <button onClick={()=>{dispatch("sub")}}>点击减一</button>
        </Fragment>
    )
}
export default App;