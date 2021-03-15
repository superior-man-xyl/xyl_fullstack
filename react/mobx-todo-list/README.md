# react 实战要进行了

定时应用
setInterval js es5
-> 
react state  setState  响应式的
redux VS mobx

state->一个可以被观察的对象 observerable
界面更新 单向绑定
组件类的表达  自身的状态-》响应式
数据一般放在父组件里  -》 传递给子组件

redux   问？-如果是没有关系的组件 共享数据和状态该怎么办？
使用redux
1. 专业的数据流管理  redux mobx
store  相当于一个中央仓库
store 中央仓库
local -》中央仓库
使用new Store 创建了数据中央(仓库);
要拿数据就是在仓库管理员那申请一下

2. 使数据的管理有一个正规可靠的流程 
action applyTravel()
思想：为什么需要action？ 使其有序进行，要什么申请什么
reducer -》 纯函数 这是算账的过程

# mobx 比redux 更简单的数据流管理
1. index2.js  observerable 观察(组件)与被观察的(有状态实例)   

2. index.js 里用上 Store Provider   加一个store模块
    从store 里去借用数据 redux里就是用connect mobx里就是用@inject 
    都是HOC操作
    ()=>{
        return ()=>{
            高阶函数HOC
        }
    }

vsCode不支持装饰器模式  所以会报错，但没事，下面代码可以弥补，写到一个配置文件中jsconfig.son
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}

3. store 分支