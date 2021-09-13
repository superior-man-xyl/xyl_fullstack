# react组件如何通信
- 父子组件 props
- 子父组件，父组件传递一个函数给子组件，然后子组件调用该函数
- 自定义事件
- redux context

# JSX本质是什么

# 函数组件和class组件的区别


# react的方法为什么要绑定this
# react的event，事件机制
# context是什么，有何用途
- 父组件可用来向其下所有子孙组件传递信息，比如一些公共信息：主题色，语言
- 复杂的公共信息请用redux
# React组件生命周期
- 单组件生命周期
- 父子组件生命周期关系
- 注意SCU
# React 发起ajax应该在哪个生命周期中
- 和Vue一样
- componentDidMount，这个DOM已经渲染完成的生命周期里
# componentShouldUpdate的用途

# 描述redux单向数据流
# setState是同步还是异步？（与场景题有关）
- 首先操作state不能直接修改state，要使用不可变值，通过setState修改
- 不可变值就是要改变结果时的赋值不会影响到原来state的值，例如 ``list : this.list.concat(100)``,concat返回一个新数组  
```js
this.list.push(100);
this.setState({
    list:this.list;//这样也是不行的，能成功，但有问题
    //应该像下面这样
    list:this.list.concat(100);
    // 或者和list2一样
})
let listCopy=this.list2.slice();
listCopy.push(100);
this.setState({
    list2:listCopy;
})
```
对象也同理，使用assign或者解构{...obj,xxx},来获得新数组

这些都是react的基础，react基于不可变值，这些函数式编程，纯函数等概念
- setState比较灵活，如果直接使用和在组件生命周期或React合成事件中时是异步的，如果在setTimeout或者自定义的DOM事件中使用是同步的。
- setState可能会合并
https://zhuanlan.zhihu.com/p/44537887
https://blog.csdn.net/wuyxinu/article/details/113902057

![](https://i.bmp.ovh/imgs/2021/09/97c0a9fb59e63230.png)
# 知识点
将数据和方法都放在父组件，将方法和数据传给子组件，子组件这些低级组件更多的作为一个展示，这样一个状态（数据）提升的设计原则

- 生命周期
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/





# 高级特性
## 函数组件和class组件的区别（下面以函数组件来比较class组件）
- 纯函数，输入props，输出jsx
- 没有实例，没有生命周期，没有state
- 不能扩展其他方法
具体分析：

### class组件特点：

- 有组件实例
- 有生命周期
- 有 state 和 setState
### 函数组件特点：

- 没有组件实例
- 没有生命周期
- 没有 state 和 setState，只能接收 props
- 函数组件是一个纯函数，执行完即销毁，无法存储 state

### class 组件存在的问题：

- 大型组件很难拆分和重构，变得难以测试
- 相同业务逻辑分散到各个方法中，可能会变得混乱
- 复用逻辑可能变得复杂，如 HOC 、Render Props

所以 react 中更提倡函数式编程，因为函数更灵活，更易拆分，但函数组件太简单，所以出现了hook，hook就是用来增强函数组件功能的。
## 非受控组件
- ref
与Vue中ref相似，但使用上区别较大
```js
constructor(){
    this.inputRef=React.createRef();//创建ref
}
render(){
    return <><input defaultValue={this.state.value} ref={this.inputRef} /><button onClick={this.alertName}></button></>
}
alertName=()=>{
    const elem = this.inputRef.current;//currnt指的就是当前DOM节点
    alert(elem.value);
}
```
- defaultValue（默认内容） defaultChecked（单选的默认勾选）
- 上面的这些都不是通过state变化（setState()改变state）控制的，所以不是直接改变state来控制的就是非受控组件
需要手动操作DOM元素时，就需要使用非受控组件

总结下非受控组件的使用场景
- 必须手动操控DOM元素，setState实现不了
- 文件上传 ``<input type='file'/>``
- 某些富文本编辑器，需要传入DOM元素

- 优先使用受控组件，符合react设计原则，必须操作DOM时就使用非受控组件
## Portals（传送门）
组件按照既定层次嵌套渲染，那有些需要让组件渲染到父组件以外的场景，我们如何实现？
```js
render(){
    return ReactDOM.createPortals(
        <div className='model'>{this.props.children}前面相当于slot</div>
        ,document.body//第二个参数用于指定节点
    )
}
```
上面例子假设设定属性fixed，固定定位，所以需要放到body这一层会比较好

### 使用场景
- 父组件为overflow:hidden,其会限制子组件的展示，所以Portals可以用于子组件逃离父组件
- 父组件z-index太小
- fixed需要放到body第一层级
## context
当公共信息需要传递给每个组件时，而使用props又太繁琐，使用redux又有点小题大作

https://react.docschina.org/docs/context.html

应用场景：最外层组件向下传递数据，比如影响语言和主题等。
## 异步组件
引入一个动态组件
```js
const ContextDemo = React.lazy(()=>import('./contextDemo'));
class App extends React.Component {
    construct(props){
        super(props);
    }
    render(){
        return <>
            <React.Suspense fallback={<div>Loading.....</div>}>{//未加载之前会有loading....字样}
                <ContextDeme />
            </React.Suspense>
        </>
    }
}
```

## SCU
为什么react开发团队不给react写好SCU的代码，毕竟可以优化这方面的性能，当与子组件相关的数据没变时，不重新渲染子组件
因为 react无法确定用户的写法是否规范，有没有按照不可变值的规范去做setState
```js
// 不规范写法
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.list !== this.props.list){
        return true;
    }
    return false;
}
//正确写法
this.setState({
    list: this.state.list.concat(xxx);//满足不可变值，返回新数组，之前数据不会被改变
})
//不规范写法
this.state.list.push(xxxx);
this.setState({
    list: this.state.list;
})
//这样的写法是不能比较的，为SCU开发写死后，又不可能要求用户工程师按照不可变值得规范写，大部分人可能会像上面那种写SCU
```
- SCU默认返回true，也就是React默认重新渲染所有子组件
- 必须搭配不可变值一起使用，不然就是不能数据更新，或者判断时使用深度比较，一次性递归到底比较，性能可能得不偿失（所以SCU尽量使用浅比较（也就是比较前几层），state这些层级不应过深，扁平一些）
- 可以先不用SCU，有性能问题时再考虑使用

## pureComponent（纯组件） 和 memo （备忘录）
 PureComponent 也就是纯组件，取代其前身 PureRenderMixin , PureComponent 是优化 React 应用程序最重要的方法之一，易于实施，只要把继承类从 Component 换成 PureComponent 即可，可以减少不必要的 render 操作的次数，从而提高性能，而且可以少写 shouldComponentUpdate 函数（shouldComponentUpdate通过判断props和state是否发生变化来决定需不需要重新渲染组件），主要目的就是防止不必要的子组件渲染更新。
 也就是纯组件里实现了SCU的浅比较

 pureComponent 应用于class组件
 memo 应用于 函数组件，相当于函数组件里的 pureComponent

 浅比较已经适用于大部分情况（尽量不要做深度比较）

 - pureComponent使用
 ```js
// 普通组件
class Input extends React.Component {

}
//纯组件
class List extends React.pureComponent {
    // 类似于加了SCU，SCU里写了个浅比较
}
 ```
 - memo使用
 ```js
 function Child({seconds}){
    console.log('I am rendering');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};
export default React.memo(Child)
// 就是使用memo包裹
//memo有第二个参数，关于对比的方法
 function List(props){

 }
 function isEquel(prevProps, nextProps){
     //比较函数，类似于SCU
 }
 export default React.memo(List,isEquel);
 ```

 ## immutable.js
 彻底拥抱不可变值
 基于共享数据（不是深拷贝），性能好

 ## 抽离React组件公共逻辑部分
 - mixin，已经被React废弃
 - 高阶组件，HOC
 ```js
 // 高阶组件不是一种功能，而是一种模式
 const HOCFactary=(Component)=>{
     class HOC extends React.Component{
         // 在这里定义多个组件的公共逻辑
         render(){
             // 透传props
             return <Component {...this.props} {/*公共逻辑方法 onMouse=xxx*/}/> //返回拼装结果
         }
     }
     return HOC;
 }
 const List1 = HOCFactary(listDemo1);
 const List2 = HOCFactary(listDemo2);
 ```
 ?? vue如何实现高阶组件
 - Render Props ： 指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
 就是传一个render函数给子组件，子组件通过这个props.render函数进行渲染

## redux使用
- 隐含了比较多的点，比如不可变值，纯函数
- 基本概念：
    - store state
    - action
    - reducer
- 单向数据流
    - dispatch(action)
    - reduce -> newState
    - subscribe 触发通知
- react-redux
    - Provide
    - connect
    - mapStateToProps  mapDispatchToProps
- 异步action（即action如何处理异步）
    - 与redux-thunk有关

<img src = 'https://i.bmp.ovh/imgs/2021/09/58815c2a09333996.png' />

- 中间件 
    - 通常中间件是在dispatch里进行操作
    ![](https://i.bmp.ovh/imgs/2021/09/c4653975c41519aa.png)
    ![](https://i.bmp.ovh/imgs/2021/09/9c2b8de37bddaa3c.png)
    - 常用中间件
        - redux-thunk
        - redux-promise
        - redux-saga

## redux如何进行异步请求
- 使用异步action（同步action和异步action的区别）
- redux-thunk
## react-router
- hash，H5 history 和vue同
- 基本使用
- 动态路由：
    路由拆分 https://chenyitian.gitbooks.io/react-router/content/docs/guides/advanced/DynamicRouting.html
- 路由配置懒加载
![](https://i.bmp.ovh/imgs/2021/09/0ceab83eca014ed9.png)