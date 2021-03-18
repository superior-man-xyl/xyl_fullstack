import React, {useEffect,useState } from 'react';
// 有了react hooks 所有的组件都可以用函数
// useState 代替类里的设置状态
const HookMovie=()=>{
    const [movies, setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    //movies在哪里呢？
    useEffect(()=>{
        //发送请求
    },[])
    return (
        <div>
            HookMovie
        </div>
    )
}
export default HookMovie;