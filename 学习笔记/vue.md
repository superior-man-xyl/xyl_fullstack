# 面试题引导

- V-show 和 v-if 的区别？
- 为什么 V-for 中要有 key
- 描述 Vue 生命周期，加上有父子组件的情况
- vue 组件如何通信
- 描述组件更新和渲染的过程
- 双向数据绑定 v-model 的实现原理

# props 和 $emit

父子组件通信使用 props
子到父组件: 子组件中使用 this.$emit()触发父组件事件，这里this指的是调用父组件的事件
兄弟组件：使用自己创建的新的vue实例event，event.$on()在某兄弟组件里绑定事件，另一个数据来源的兄弟组件使用 event.$emit()触发，event 指的是调用自定义的事件

# created 和 mounted 的区别

# 高级特性

- 自定义 v-model

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
- keep-alive
实际就是缓存组件，适用于频繁切换的情景，就不用重复渲染
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
- vue-router