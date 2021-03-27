import React,{useContext, useState} from 'react';

import logo from './logo.svg';
import './App.css';

const ThemeContext=React.createContext(null);

export function ChildWithTheme(){
  const theme=useContext(ThemeContext);
  return (
    <div>我是有皮肤的{theme}</div>
  )
}

export function ChildNoTheme(){
  console.log('不关心皮肤的子组件被渲染了');//这个组件只是哥展示组件，不需要数据
  return <div>我不关心皮肤，皮肤改变时别让我渲染</div>
}

//数据变了，组件要检测哪些地方数据变了，重新渲染VDOM树，=>自顶向下 函数式组件React.createElement
// React.createElement({
//   ChildWithTheme,
//   props:{
//     theme:
//   }//immutable里的，会是内存中新的一份
// })

function ThemeApp({children}){
  const [theme,setTheme]=useState("light");
  const onChangeTheme=()=>{
    setTheme(theme==='light'?'dark':'light');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={onChangeTheme}>改变皮肤</button>
      {children}
      {/* 由于 children 从外部传入的，也就是说 ThemeApp 这个组件内部不会再有 React.createElement 这样的代码，
      那么在 setTheme 触发重新渲染后，children 完全没有改变，所以可以直接复用。 */}
    </ThemeContext.Provider>
  );
}

function App() {
  // const [theme,setTheme]=useState("light")
  // const onChangeTheme=()=>{
  //   setTheme(theme==='light'?'dark':'light');
  // }//移到ThemeApp里
  // return (
  //   <ThemeContext.Provider value={theme}>
  //     <button onClick={onChangeTheme}>改变皮肤</button>
  //     
  //     {/* <ChildWithTheme/>
  //     <ChildNoTheme/>
  //     <ChildNoTheme/>
  //     <ChildNoTheme/> */}
  //   </ThemeContext.Provider>
  // );
  return(//使用了ThemeApp后就不会再多渲染{children}了
    <ThemeApp>
      <ChildWithTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
      <ChildNoTheme/>
    </ThemeApp>
  )
}

export default App;
