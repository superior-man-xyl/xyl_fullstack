import Head from 'next/head'
import Xyl from '../component/Xyl'
// import react from 'react';
import Link from 'next/link';
import Router from 'next/router'

export default function Home() {

//6个钩子事件
Router.events.on('routeChangeStart',(...args)=>{
  console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})

Router.events.on('routeChangeComplete',(...args)=>{
  console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
})

Router.events.on('beforeHistoryChange',(...args)=>{
  console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
})

Router.events.on('routeChangeError',(...args)=>{
  console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
})

Router.events.on('hashChangeStart',(...args)=>{
  console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
})

Router.events.on('hashChangeComplete',(...args)=>{
  console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
})


  function gotoA(){
    Router.push('./Link-style-Demo-A');
  }
  function gotowho(){
    // Router.push('./who?name=大黄');
    //或者
    Router.push({
      pathname:'./who',
      query:{
          name:'大黄'
      }
    })
  }
  return (
    <div>
      <Xyl>点亮谢永良</Xyl>
      <div name="self">我是首页</div>
      <div>
      <Link href="./Link-style-Demo-A"><a>去A页面</a></Link>
      </div>
      <div>
      <Link href="./Link-style-Demo-B"><a>去B页面</a></Link>
      </div>
      {/* 编程式跳转  使用Router.push()*/}
      <div>
         <Xyl onClick={()=>{Router.push("./Link-style-Demo-B")}}>点击通往页面B</Xyl>
      </div>
      {/* 下面更好复用的方式 */}
      <div>
        <Xyl onClick={gotoA}>点击通往页面A</Xyl>
      </div>
     <Link href="./who?name=小黑">呼叫小黑！</Link><br/>
     <Link href={{pathname:'./who',query:{name:'小花',age:19}}}>呼叫小花！</Link>
     {/* 编程式的参数传递 */}
     <button onClick={gotowho}>呼叫大黄</button>
     <Link href="#self"><a>呼叫自己</a></Link>
    </div>
  )
}
