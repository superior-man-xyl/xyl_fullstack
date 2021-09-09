# 面试题引导

- v-show 和 v-if 的区别？
  1. v-show是通过css display 来控制显示和隐藏
  2. v-if 是真正的渲染和销毁组件
  3. 频繁切换状态用v-show，否则使用v-if

- 为什么 V-for 中要有 key
  1. key是必须要用的，不能是index和random
  2. 因为diff算法中通过tag和key来判断是否是sameNode
  3. 其存在达到了减少渲染次数，提升渲染性能的作用

- 描述 Vue 生命周期，加上有父子组件的情况

- vue 组件如何通信
  1. 父子组件props和this.$emit
  2. 自定义事件 event.$on event.$off event.$emit
  3. vuex

- 描述组件更新和渲染的过程

- 双向数据绑定 v-model 的实现原理
  1. input元素的value=this.name
  2. 绑定input事件this.name=$event.target.value
  3. data更新触发re-render

- computed有什么特点
  1. 缓存，data不变不会重新计算
  2. 提高性能

- 为何组件中的data必须是个函数 data(){return {}}
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
每一个vue组件都是一个vue实例，通过new Vue()实例化，引用同一个对象，如果data直接是一个对象的话，那么一旦修改其中一个组件的数据，其他组件相同数据就会被改变。
而data是函数的话，每个vue组件的data都因为函数有了自己的作用域，互不干扰

- ajax应该放到哪个生命周期
  尽量放到mounted里，应为js是单线程的，生命周期是同步的，ajax是异步的，mounted之前都没有渲染完，就算是吧ajax放到created里，也是等到mounted后才执行异步代码，所以ajax请求放前面没有用，不能更快的拿到数据，只会使代码逻辑更加混乱

- 如何将所有的props传递给子组件（偏细节，优先级不高）
  使用$props, 例如：``<User v-bind="$props" />``

- 多个组件有相同的逻辑时，怎么抽离
  使用mixin，再说下mixin的一些缺点

- 何时需要使用 beforeDestroy
  1. 解绑自定义事件event.$off
  2. 清除定时器
  3. 解绑自定义的DOM事件，例如 window scroll，就是DOM操作中的addEventListener，Vue机制下的事件不用自己去解除，Vue自动解除

- vue为什么是异步渲染，$nextTick有什么用
  因为vue是组件级更新，当前组件里的数据变了，它就会去更新这个组件。当数据更改一次组件就要重新渲染一次，性能不高，为了防止数据一更新就更新组件，所以做了个异步更新渲染。而$nextTick在DOM更新完触发回调

- vue常见性能优化的方式
  1. 合理的使用v-show和v-if
  2. 合理使用computed
  3. v-for时加key，且避免和v-if同时使用，v-for优先级更高，会先把所有列表都渲染出来再进行一次判断，就很多余
  4. 自定义事件，DOM事件及时销毁
  5. 合理使用异步组件
  6. 合理使用keep-alive
  7. data层级不要太深，因为深度监听需要一次性递归到底，深度过大，计算量太大
  8. 使用vue-loader在开发环境下做模板编译，即预编译，而不是在浏览器端再进行编译
  9. webpack层面的优化
  10. 前端一系列通用的优化，比如图片懒加载
  11. 使用SSR
# props 和 $emit

父子组件通信使用 props
子到父组件: 子组件中使用 this.$emit()触发父组件事件，这里this指的是调用父组件的事件
兄弟组件：使用自己创建的新的vue实例event，event.$on()在某兄弟组件里绑定事件，另一个数据来源的兄弟组件使用 event.$emit()触发，event 指的是调用自定义的事件

# created 和 mounted 的区别

# 高级特性

- 自定义 v-model 也是一个考题，如何实现一个v-model

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
        const ulElem = this.$ref.ul1;//$ref来自于<ul ref='ul1'></ul>
        console.log(ulElem.childNodes.length);
        //可以获取到list渲染后的数组长度
    })
}
```
- slot
- 动态组件
:is
- 异步组件
```js
//使用于一些大组件
components: {
    demoComponent: ()=>import (../demoComponent)
}
```

问题： 何时使用异步组件？ - 加载大组件 - 路由异步加载

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
缺点： 变量来源不明确，因为可以引入多个mixin，很多使用的变量，方法，不容易找到来自哪里，不利于阅读
        多个mixin可能会有数据上的冲突
            mixin与组件可能出现多对多的关系，比如一个组件引用多个mixin，还有多个组件引用同一个mixin，这样复杂度就会很高，以后改动容易出现问题，但是一些复杂度低的项目可以用 


- vuex

vuex中action和mutation有何区别
1. action中处理异步，mutation不可以
2. mutation做原子操作，即一个操作
3. action可以整合多个mutation

- vue-router