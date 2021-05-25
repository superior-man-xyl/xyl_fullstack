import React,{useState,useCallback,useMemo} from 'react';

const ChildMemo=({name,onClick})=>{
    console.log('子组件更新了');
    return (
        <>
            <div style={{ color: name.color }}>我是一个子组件，父组件传来的数据是：{name.name}</div>
            <button onClick={onClick.bind(null,'新的组件name')}>改变name</button>
        </>
    )
}

export default ()=>{
    const [count,setCount]=useState(0);
    const [name,setName]=useState('Child组件');
    return(
        <>
            <button onClick={(e)=>{setCount(count+1)}}>加一</button>
            <p>count:{count}</p>
            {
                console.log(name.indexOf('name'),'||||||')
            }
            <ChildMemo name={{name:name,color:name.indexOf('name')!==-1?'red':'green'}} 
            // onClick={useCallback((newName)=>setName(newName))}
            onClick={useCallback((newName)=>setName(newName),[])}//加个[]优化
            />
        </>
    )
}