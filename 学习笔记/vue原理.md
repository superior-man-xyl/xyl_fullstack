# vue 原理

- 组件化和 MVVM
  组件化开发是为了提高代码的可复用性，灵活性，提高系统设计，从而提高开发效率，方便团队分工协作开发。
  怎么理解组件化：传统组件，只是静态渲染，更新还要依赖 DOM 的操作，而现在的 vue MVVM & react setState 则对组件化做了一个创新，是数据驱动视图的组件化，不用再多考虑 DOM 操作中的一些兼容性什么的
  MVVM: 根据模型图说说（其中 viewModle 比较抽象，更多的是整个 view 和 model 的连接部分，不能以一个独立的代码片段来表达），再说说数据驱动视图什么的，一些好处和以前传统组件的区别。

  数据驱动视图的思想，不去操作视图，而是操作数据，通过数据来渲染视图，只用关心数据本身，和视图分别开发不导致那么混乱，减少心智负担

    https://www.jianshu.com/p/9445932a1daa

- 响应式原理
  核心 API：object.defineProperty(vue3.0 有兼容性问题，兼容性不好，对于一些老版本浏览器，且还在普及中)
  通过 get 和 set 来知道即监听数据做了什么操作
  defineProperty 缺点：
  深度监听需要递归到底，一次性计算量大
  无法监听新增属性和删除属性（所以新增删除属性要使用 Vue.set & Vue.delete）
  defineProperty也不能监听数组的变化

  对于数组的监听：就是重新定义原型，重写下数组操作的方法，实现监听（Proxy可以原生监听数组变化）

  问题：请描述响应式原理？ 从两点入手  - 如何监听data的变化 - 组件渲染和更新的流程

- vdom 和 diff 算法
vdom重点是 patch(elem,vnode)和patch(vnode,newVnode)
  diff 算法的时间复杂度是 O(n^3),可这些框架是怎么做到优化为 O(n)的呢，下面是diff算法的策略

1. 只比较同一层级
2. tag 不同直接删掉重建，不再深度比较
3. tag 和 key 都相同，则被认为是相同节点，不再深度比较，这也是 key 的作用

- 问题：简述diff算法的过程（待完善）

- 模板编译

1. 模板编译为 render 函数，执行 render 函数，返回 vnode；
2. 基于vnode再执行patch(源码中用于更新DOM的函数)和diff
3. 使用webpack vue-loader，会在开发环境下编译模板，这也是个性能优化的点，如果在浏览器端运行时才编译，会影响些性能
 最后也可以用 render 来代替 template

- patch判断流程如下：
    - a) 如果新节点为空，此时旧节点存在（组件销毁时），调用旧节点destroy生命周期函数
    - b) 如果旧节点为空，根据新节点创建DOM
    - c) 其他（如果新旧节点都存在）
        - a) 旧节点不是DOM(组件节点)，且新旧节点相同
            - 执行patchVnode
        - b) 旧节点是DOM元素或者两个节点不相同
            - 创建新节点DOM，销毁旧节点以及DOM。

- 组件渲染过程
1. 初次渲染过程
    - 解析模板为render函数（或开发环境就已经完成，比如使用了vue-loader）
    - 触发响应式，监听data属性 getter setter  （getter会有涉及到，setter会在更新中被触发）
    - 执行render函数，生成vnode，patch(elem,vnode)
2. 更新过程
    - 修改data，触发setter（此前在getter中已被监听）
    - 重新执行render函数，生成newVnode
    - 接着patch(vnode,newVnode)
3. 异步渲染
    - 回顾$nextTick
    - 汇总data的修改，一次性更新视图
    - 减少DOM更新次数，提高性能
- 前端路由
1. hash路由
    - 哈希路由会触发网页的跳转，即浏览器页面的前进和后退
    - hash路由不会重新刷新页面，这也是SPA必备的特点
    - hash永远不会提交到server端，全由前端来控制
    - 使用window.hashChange来监听跳转
    ```js
    window.hashChange = (event) =>{
        console.log(event.oldURL,event.newURL);
    }
    ```
    - 可以通过 location.hash 和 location.href 来获取url信息和hash
2. history路由
    - 用url规范的路由，但跳转时不刷新页面
    监听使用：
    - history.pushState
    - window.onpopstate

3. 两者选择
- toB的系统推荐使用hash，简单易用，对url规范不敏感
- toC的系统可以考虑使用H5 history，重点在于seo 要管搜索引擎优化，但是需要server端支持



题目：
1. 请用vnode描述一个DOM结构
```html
<div class="parent" style="height:0" href="2222">
    111111

</div>
```
```js
{    

    tag: 'div',    

    data: {        

        attrs:{href:"2222"}

        staticClass: "parent",        

        staticStyle: {            

            height: "0"

        }
    },    

    children: [{        

        tag: undefined,        

        text: "111111"
        
    }]
}
```
