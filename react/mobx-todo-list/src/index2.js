import React from 'react'
import ReactDOM from "react-dom"
//makeAutoObservable 使一个状态可以被观察
import { makeAutoObservable } from "mobx"//1
import { observer } from "mobx-react";//观察者  2
// TimerView use 2 && Store use 1  
//下面的是一个Store
class Timer{//作用:提供数据，毕竟其都在全局里 index.js
  secondsPassed=0
  constructor(){
    makeAutoObservable(this)//被观察
  }
  increase(){//一秒加一
    this.secondsPassed+=1;
  }
  reset(){//重置方法
    this.secondsPassed=0;
  }
}

const myTimer =new Timer();//实例
//该组件是观察某个state(状态)的组件
const TimerView =observer(({timer})=>(//解构了一个timer,来自于最下面的传值，render里的组件
  <button onClick={()=>timer.reset()}>Seconds passed:{timer.secondsPassed}</button>//观察
));

setInterval(()=>{
  myTimer.increase();//一秒调用一次
},1000)

//根上套上数据流管理  使组件与状态分离 组件不能再自己管理状态
//为了组件不自己管理状态
//状态就要提升  要被组件observer(观察)
// secondsPassed=0
// action increase reset
ReactDOM.render(<TimerView timer={myTimer}/>,document.body);//传值timer