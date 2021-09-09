# 函数式编程
是一种编程范式，主要是纯函数 和 不可变值
# vdom 和 diff
h函数 vnode数据结构 patch函数
vue2.0 vue3.0 react三者实现vdom的细节都不同，但是其的核心思路和核心概念都是一样的
diff算法与vue大致相同
# JSX本质
jsx等同于vue的模板，react中JSX其实就是createElement函数
react通过（jsx转译为React.createElement的形式） React.createElement 创建 vnode ，再将vnode 通过patch 渲染出来
```js
// jsx
const imgElem = <div id="div1"><p>some text</p><img src=imgUrl></div>
```
React.createElement语法：
```js
React.createElement(
    type,
    [props],
    [...children]
)
//或者
React.createElement(
    type,
    [props],
    children1,
    children2,
    ....
)
/**
第一个参数：传入的是类似于html结构的tag标签名称，例如：li p, 或者是自己写的组件List这样的，后面会继续解析这个标签的结构
自己定义的组件一定要以大写开头，这样也是为了区分原生tag
第二个参数：表示的是属性，例如 id className
第三个参数：子节点，要展示的文本内容也属于子节点
*/
```
```js
//转译后
const imgElem = React.createElement("div", {id:"div1"}, React.createElement("p", null, "some text"), React.createElement("img", {src: imgURl}));
```
# 合成事件
React 的事件都是挂载在document上的，event不是原生的，是SyntheticEvent合成事件对象，和vue的不同，和DOM事件也不同
![](https://i.bmp.ovh/imgs/2021/09/75dd8bc519cc2cfe.png)
## 为什么要合成事件机制
- 为了更好的兼容性和跨平台，自己实现了一套事件机制，摆脱了DOM事件的那一套逻辑，但又不是完全的摆脱，其必须依赖DOM去监听和触发事件，且这样不完全摆脱，比如从DOM上移动到到某移动端时只需要改一些DOM相关的逻辑就能完全贴合某端，不用完全重新改写
- 载到document上，可减少内存消耗，避免频繁解绑
- 方便事件的统一管理（如事务机制）
# setState 和 batchUpdate
## setState主流程
![](https://i.bmp.ovh/imgs/2021/09/0abf4bf84a2ff7b5.png)
那么setState是异步还是同步呢？<br/>
- setState无所谓同步或者异步，主要看是否命中batchUpdate机制，依据isbatchUpdates 进行判断，setState为异步时，会把组件保存在dirtyComponents中，
## batchUpdate机制
哪些能命中batchUpdate机制
- 生命周期（和他调用的函数）
- React中注册的事件（和他调用的函数）
- 以上就是React可以“管理”的入口
哪些不能命中batchUpdate机制
- setTimeout和setInterval(和他调用的函数)
- 自定义的DOM事件（和他调用的函数）
- React“管不到”的入口
## transaction(事务)机制
![](https://i.bmp.ovh/imgs/2021/09/3e61ab2984714dc3.png)

# 组件渲染与更新过程
- jsx如何渲染为页面，setState之后如何更新页面，讲解全流程
## 具体渲染
- 组件有了props和state这些数据
- 通过render解析jsx结构，就生成vnode
- 接着patch(elem,vnode)，react源码中不一定叫patch，但是这个意思
## 更新过程
- setState(newState)-->dirtyComponent（里面可能有子组件，因为与子组件相关的数据可能改变）
- render() 生成 newVnode
- patch(vnode,newVnode)
## 上述的patch在react中分为两个阶段
- reconciliation阶段-执行diff算法，是纯js计算
- commit阶段-将diff结果渲染DOM
# 可能会发生的一些性能问题
## 原因和场景
- js是单线程的，而且和DOM渲染使用同一个线程
- 当组件足够复杂, 组件更新时计算和渲染的压力都会很大
- 同时再出现DOM操作需求将会卡顿，例如鼠标拖拽，动画等，就会出现卡顿的情况
## 怎么解决这类问题的————**fiber**
- 将reconciliation阶段进行任务拆分（commit无法拆分，因为其里面是DOM渲染，要拆分DOM渲染那么就需要浏览器进行很大的支持）
- 在DOM需要渲染的时候暂停更新，空闲的时候继续
- 通过window.requestIdleCallback这个API来知道什么时候DOM需要渲染，一些老浏览器不支持