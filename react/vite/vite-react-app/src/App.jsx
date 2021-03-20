import React, { useState , useEffect} from 'react'
// import { getBannerRequest } from './api/request'//解构出想要的
import {Provider} from 'react-redux'
import store from './store'
import Recommend from './pages/Recommend'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   console.log('---------');
  //   getBannerRequest()
  //   .then(data=>{
  //     // console.log(data);
  //     // 1.  action->dispath(reducer)->Store(state)   写的
  //     // 2. store 取出来->components 用了  读的
  //     // 3. connect({dispactch,state get })(Component)
  //   })
  // },[])//相当于生命周期的总和
  return (
    <Provider store={store}>
      <Recommend />
    </Provider>
  )
}

export default App
