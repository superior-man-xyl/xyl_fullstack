import * as React from 'react';

interface Props {
  userName: string;
//   onChange:(e)=>void;//表示这是个函数
  //e:React.ChangeEvent<HTMLInputElement> ---约束了是什么事件类型，且是在input里发生
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// 什么时候要写ts 什么时候容易出问题？ 类型约束
// ts 代码 @types/react 
// 有需要去ts 约束他的类型？ props 
// Function Component
// export const NameEditComponent = (props:Props) => (
export const NameEditComponent: React.FC<Props> = (props) => (
  <>
    <label>Update name:</label>
    <input value={props.userName} onChange={props.onChange}/>
  </>
)
