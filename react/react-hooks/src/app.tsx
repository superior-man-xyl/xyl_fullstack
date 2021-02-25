import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

// class App extends Component {
//   constructor() {
//     this.state = {

//     }
//   }
//   render() {
//     return (

//     )
//   }
// }

// StatelessComponent
export const App = () => {
  // React hooks name 状态的名字， setName 修改状态用setName 
  //共享状态
  const [name, setName] = React.useState('initialValue') // state 
  // react hooks 
  // 函数式组件可以借助一些魔法函数来实现状态 

//原来class里处理函数很多 .bind this，太麻烦，函数式组件好处就在这里
//ts还可以像java一样，有友好的代码提示
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
// setTimeout(()=>{//实验下setName  setName 修改数据的快捷方式
//     setName('aaaaaa')
// },3000)
// setName('aaaaaa') 直接改变了State的值，defaultUserName改为了aaaaa
  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent userName={name} onChange={setUsernameState}/>
    </>
  )
}
