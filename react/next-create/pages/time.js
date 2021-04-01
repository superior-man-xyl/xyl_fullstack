import React,{useState} from 'react';
// import moment from 'moment';//用懒加载优化，
// 缺存在着一个潜在的风险，就是如果有半数以上页面使用了这个momnet的库，
// 那它就会以公共库的形式进行打包发布，就算项目第一个页面不使用moment也会进行加载，这就是资源浪费，

const time=function(){
    const [nowTime,setTime]=useState(Date.now());

    //演示懒加载模块
    const changeTime=async ()=>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format());
    }
    return (
        <>
            <h1>显示时间为：{nowTime}</h1>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )

}
export default time;