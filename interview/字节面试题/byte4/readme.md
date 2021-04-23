- 组件的产出是什么? 是 VNode 虚拟节点——> VTree 虚拟DOM树 ——>  diff源码
- node开发用过哪些库呢？ lodash（yarn add lodash）   使用snabbdom来生成虚拟DOM
# 组件的本质

1. 模板引擎 前身历史（在 JQuery 盛行的年代，比起组件，“模板引擎”的概念要更加流行。）
    字符串 + 数据 => html   这里还是没有摆脱DOM，依旧还有频繁的DOM操作
    一个组件就是一个函数，给我什么样的数据，我就渲染对应的 html 内容。
    所以组件的产出是Virtual DOM
2. VNode
3. 
