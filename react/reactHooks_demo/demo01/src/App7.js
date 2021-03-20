import React, { useState, useMemo } from 'react';

function ChildComponent({name,children}){
    function changeXiaoHong(){
        console.log('小红向我们走来了');
        return name+',小红向我们走来了';
    }
    const actionXiaoHong=changeXiaoHong(name);
    return (
        <>
            <div>{actionXiaoHong}</div>
            <div>children</div>
        </>
    )
}

function App(){
    const [xiaoHong,setXiaoHong]=useState('小红正在待客中！');
    const [zhiLing,setzhiLing]=useState('志玲正在待客中！');
    return (
        <>
            <button onClick={()=>{setXiaoHong(new Data().getTime())}}>小红</button>
            <button onClick={()=>{setzhiLing(new Data().getTime()+'，志玲向我们走来！')}}>志玲</button>
            <ChildComponent name={xiaoHong}>{zhiLing}</ChildComponent>
        </>
    )
}

export default App;