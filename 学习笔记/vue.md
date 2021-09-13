# 面试题引导

## v-show 和 v-if 的区别？
  1. v-show是通过css display 来控制显示和隐藏
  2. v-if 是真正的渲染和销毁组件
  3. 频繁切换状态用v-show，否则使用v-if

## 为什么 V-for 中要有 key
  1. key是必须要用的，不能是index和random
  2. 因为diff算法中通过tag和key来判断是否是sameNode
  3. 其存在达到了减少渲染次数，提升渲染性能的作用

## 描述 Vue 生命周期，加上有父子组件的情况
  - 挂载阶段：
    - beforeCreate:此阶段为实例初始化之后,此时数据观察和事件机制还没有形成,不能获取到dom节点；
    - created：此阶段的vue实例已经创建,仍不能获取DOM 节点.把vue 的一个实例给初始化了，只是存在于 js 内存的一个变量而已，这个时候并没有开始渲染；
    - beforeMount:在这一阶段,我们虽然还不能获取到具体 DOM 元素,但 vue 挂载的根节点已经创建,下面 vue 对DOM 的操作将围绕这个根元素继续进行,beforeMount 这个阶段是过渡性的,一般一个项目只能用到一两次；
    - mounted：组件真正绘制完成了，页面已经渲染完了,数据和DOM 都已被渲染出来,一般我们的异步请求都写在这里
  - 更新阶段：
    - beforeUpdate: 这一阶段，vue遵循数据驱动DOM 的原则，beforeUpdate 函数在数据更新后没有立即更新数据，但是DOM 数据会改变，这是双向数据绑定的作用；
    - updated：这一阶段，DOM 会和更改过的内容同步
  - 销毁阶段：
    - beforeDestroy：在上一阶段vue已经成功通过数据驱动DOM 的修改，当我们不再需要 vue 操纵 DOM 时，就要销毁 vue，也就是清除vue 实例与 DOM 的关联，调用destroy方法可以销毁当前组件。在销毁前，会触发 beforeDestroy 钩子函数；
    - destroyed：在销毁后，会触发destroyed 钩子函数

  - 多组件生命周期（有父子组件的情况）：
    - 挂载阶段（加载渲染过程）：
      - 父 beforeCreate --> 父 created --> 父 beforeMount --> 子 beforeCreate --> 子 created --> 子 beforeMount --> 子 mounted --> 父 mounted
    - 更新阶段：
      - 父 beforeUpdate --> 子 beforeUpdate --> 子 updated --> 父 updated
    - 销毁阶段：
      - 父 beforeDestroy --> 子 beforeDestroy --> 子 destroyed --> 父 destroyed
# created 和 mounted 的区别
  - 在beforecreate阶段，对浏览器来说，整个渲染流程尚未开始或者说准备开始，对vue来说，实例尚未被初始化，data observer和 event/watcher也还未被调用，在此阶段，对data、methods或文档节点的调用现在无法得到正确的数据。
  - 在created阶段，对浏览器来说，渲染整个HTML文档时,dom节点、css规则树与js文件被解析后，但是没有进入被浏览器render过程，上述资源是尚未挂载在页面上。实例已经被初始化，但是还没有挂载至$el上，所以我们无法获取到对应的节点，但是此时我们是可以获取到vue中data与methods中的数据的
  - 在beforeMount阶段，实际上与created阶段类似，节点尚未挂载，但是依旧可以获取到data与methods中的数据。
  - 在mounted阶段，对浏览器来说，已经完成了dom与css树的render，并完成对render tree 进行了布局，而浏览器收到这一指令，调用渲染器的paint（）在屏幕上显示，而对于vue来说，在mounted阶段，vue的template成功挂载在$el中，此时一个完整的页面已经能够显示在浏览器中，所以在这个阶段，即可以调用节点了 
## 何时需要使用 beforeDestroy
  1. 解绑自定义事件event.$off
  2. 清除定时器
  3. 解绑自定义的DOM事件，例如 window scroll，就是DOM操作中的addEventListener，Vue机制下的事件不用自己去解除，Vue自动解除

## vue 组件如何通信
  1. 父子组件props和this.$emit
  2. 自定义事件 event.$on event.$off event.$emit
  3. vuex

## 描述组件更新和渲染的过程
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
## 双向数据绑定 v-model 的实现原理
v-model 用于input标签，用于实现双向绑定，及时把数据的变化渲染在页面
v-model是语法糖 :value + @input
实现步骤：
  1. input元素的value=this.name
  2. 绑定input事件this.name=$event.target.value
  3. data更新触发re-render
```js
<input v-model="val">
// <!-- 基本等价于下面，因为内部还有一些其他的处理 -->
<input :value="val" @input="val = $event.target.value">
```
具体看下面高级特性里对v-model的实现
## computed有什么特点
  1. 缓存，data不变不会重新计算
  2. 提高性能

## 为何组件中的data必须是个函数 data:function(){return {xxx:xxx}}
因为vue文件相当于一个class，一个类，去使用的时候相当于是对其进行实例化
```js
var Component = function() {};
Component.prototype.data = {
    demo: 123
}
var component1 = new Component();
var component2 = new Component();
component1.data.demo = 456;
console.log(component2.data.demo); // 456
```
首先组件有一个很明显的特性，就是它们可以被复用，每一个vue组件都是一个vue实例，通过new Vue()实例化，引用同一个对象，如果data直接是一个对象的话，那么一旦修改其中一个组件的数据，其他组件相同数据就会被改变（这就会出问题，所以要给每个data一个独立的作用域）。
而data是函数的话，每个vue组件的data都因为函数有了自己的作用域，互不干扰

## ajax应该放到哪个生命周期
  尽量放到mounted里，因为js是单线程的，生命周期是同步的，ajax是异步的，mounted之前都没有渲染完，就算是把ajax放到created里，也是等到mounted后才执行异步代码，所以ajax请求放前面没有用，不能更快的拿到数据，只会使代码逻辑更加混乱

## 如何将所有的props传递给子组件（偏细节，优先级不高）
  使用$props, 例如：``<User v-bind="$props" />``

## 多个组件有相同的逻辑时，怎么抽离
  使用mixin，再说下mixin的一些缺点
下面会有mixin的使用和缺点介绍

## vue为什么是异步渲染，$nextTick有什么用
  因为vue是组件级更新，当前组件里的数据变了，它就会去更新这个组件。当数据更改一次组件就要重新渲染一次，性能不高，为了防止数据一更新就更新组件，所以做了个异步更新渲染。而$nextTick在DOM更新完触发回调

## vue常见性能优化的方式
  1. 合理的使用v-show和v-if
  2. 合理使用computed
  3. v-for时加key，且避免和v-if同时使用，v-for优先级更高，会先把所有列表都渲染出来再进行一次判断，就很多余
  4. 自定义事件，DOM事件及时销毁
  5. 合理使用异步组件
  6. 合理使用keep-alive
  7. data层级不要太深，因为深度监听需要一次性递归到底，深度过大，计算量太大
  8. webpack使用vue-loader在开发环境下做模板编译，即预编译，而不是在浏览器端再进行编译
  9. webpack层面的优化
  10. 前端一系列通用的优化，比如图片懒加载
  11. 使用SSR
# props 和 $emit
父子组件通信使用 props
子到父组件: 子组件中使用 this.$emit()触发父组件事件，这里this指的是调用父组件的事件
兄弟组件：使用自己创建的新的vue实例event（也就是通过EventBus进行兄弟间组件通讯），event.$on()在某兄弟组件里绑定事件，另一个数据来源的兄弟组件使用 event.$emit()触发，event 指的是调用自定义的事件
  - 首先在main的js里创建一个 
  ```js
  import Vue from 'vue'
  import App from './App'

  export const eventBus = new Vue()
  new Vue({
      el: '#app',
      render: h => h(App)
  })
  ```
  - 在兄弟组件里各引入 ``import { eventBus } from '../main'``
  - 然后
  ```js
    //某兄弟组件里创建事件
    created() {
      eventBus.$on('brotherSaid', (message) => {
          this.fromBrother = message
      })
    }
    //另一兄弟组件里触发事件
    methods: {
      messageSister() {
          eventBus.$emit('brotherSaid', '妈妈说，该做作业了！(^_^)!!!')
      }
    }
  ```


# 高级特性

- 自定义 v-model 也是一个考题，如何实现一个v-model

首先：``model:{ prop?: string, event?: string }``允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突
```html
<!-- 父组件 -->
<template>
  <p>{{name}}</p>
  <CustomVModel v-model="name" />
</template>
<script>
  import CustomVModel from "./CustomVModel";

  export default {
    component: {
      CustomVModel,
    },
    data() {
      return {
        name: "永良",
      };
    },
  };
</script>
```

```html
<!-- 组件 -->
<template>
  <!-- 自定义model常用于选择颜色什么的 -->
  <input
    type="text"
    :value="text"
    @input="@emit('change',$event.target.value)"
  />
  <!-- input里使用的是:value（value的属性text对应model.text），而不是v-model，change和model.event对应了起来 -->
</template>
<script>
  export default {
      model:{
          prop: 'text',  //对应props里的text
          event: 'change' //后面触发change事件，改变model里的prop
      }
    props: {
      text: String,
      default() {
        return "";
      },
    },
  };
</script>
```

- $nextTick
    vue是异步渲染的，data改变之后DOM不会立即渲染，$nextTick会在DOM渲染完后触发。以获取最新的DOM节点
- refs
    vue中快速拿到某一结点的一种方式

```js
addItem(){
    this.List.push(`${Date.now()}`);
    this.List.push(`${Date.now()}`);
    this.List.push(`${Date.now()}`);
    //上面data改变了三次，但其实合并了为了一次，后面只会渲染一次。所以需要异步的渲染来实现
    //获取DOM元素
    // const ulElem = this.$ref.ul1;//$ref来自于<ul ref='ul1'></ul>
    // console.log(ulElem.childNodes.length);//因为渲染是异步的，所以这个长度会是未改变之前的
    // 要获取到渲染之后的长度就需要使用$nextTick
    this.nextTick(()=>{
        //获取DOM元素
        const ulElem = this.$ref.ul1;//$ref来自于<ul ref='ul1'></ul>f
        console.log(ulElem.childNodes.length);
        //可以获取到list渲染后的数组长度
    })
}
```
- slot

- 动态组件
:is
使用示例：
```html
<component :is="componentTag"></component>
```
```js
data() {
    return {
        componentTag: '某组件名',//动态加载渲染组件
    }
},
```
- 异步组件
异步组件就是定义的时候什么都不做，只在组件需要渲染（组件第一次显示）的时候进行加载渲染并缓存，缓存是以备下次访问
```js
//使用于一些大组件
components: {
    demoComponent: ()=>import (../demoComponent)
}
```

问题： 何时使用异步组件？ - 加载大组件时 - 路由异步加载时

- keep-alive   问题：何时使用keep-alive
实际就是缓存组件，适用于频繁切换的情景，就不用重复渲染，可用于优化性能
```html
<keep-alive>
    <!-- 各种组件 适用keep-alive包裹后里面的组件就不会有销毁过程了，就一直存在 -->
</keep-alive>
```
里面的组件不是很多，而且简单的情况下，可以使用v-show来控制
组件比较多，而且复杂，比如说tabbar切换，就使用keep-alive，通过条件选择显示，加载，其不会像v-show一下全加载，而是满足条件v-if或其他的，就加载，然后缓存，未被显示过的，不会加载

- mixin
多个组件有相同逻辑的情况下，抽离出来
接着引用回来
```js
  mixins:[myMixin1,myMixin2]//这样引入的mixin里的data，mothed都会被柔和入当前文件，直接用
```
mixin不是完美的解决方案，有一些问题，vue3里有个composition API能解决
优点： 剥离出来后维护方便，更改一处，所有使用的地方都改变
缺点： 
  - 变量来源不明确，因为可以引入多个mixin，很多使用的变量，方法，不容易找到来自哪里，不利于阅读
  - 多个mixin可能会有数据上的冲突
  - mixin与组件可能出现多对多的关系，比如一个组件引用多个mixin，还有多个组件引用同一个mixin，这样复杂度就会很高，以后改动容易出现问题，但是一些复杂度低的项目可以用 


- vuex

vuex中action和mutation有何区别
1. action中处理异步，mutation不可以
2. mutation做原子操作，即一个操作
3. action可以整合多个mutation

- vue-router