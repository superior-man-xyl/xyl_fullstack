// tsx jsx 组件
// .tsx -> main.ts .tsx只有被main.ts加载了才会被使用
// webpack通过配置文件webpack.config.js :从入口index.tsx->hello.tsx->配置文件中modules部分->awesome-typescript-loader组件->tyescript组件->tsconfig.json->jsx->babel-core->.babelrc->es5

import * as React from 'react';
//props ：react 函数组件有的参数
//react组件数据：state状态是自己的  props是外界给的 **和小程序的有点像**
//ts 类型约束 react props 检查
//react支持静态编译
interface Props{//父组件和自组件想要做个约束，一定会传某个props，类型是什么的，要定义
    //好处：更加安全，没有该接口，就不能限制外面传来的东西，虽然也可以用

    username:string;//组件那里传来的username不是string就报错

}
// props:Props 使用接口约束  直接props也行，就是不约束，但约束要有的，不能偷懒
export const HelloComponent=(props:Props)=>{
    console.log(props);
    return <h2>Hello Component and {props.username} !</h2>
}