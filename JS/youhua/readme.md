# 性能优化，永远的大厂主题

- 当输出一万次<span>我是一个小测试</span>时，浏览器显示不出来了
优化：
1.chrome tab进程 都会有一定的内存的最高值
一万条已经在边缘了
2.内存消耗在哪里？
10000次for循环里耗时不多 1ms
主要是 document.getElementById('container').innerHTML += '<span>我是一个小测试</span>';耗时间
      document 性能开销 

- DOM是最贵的性能开销，没有之一

页面操作两步：
1.页面第一步，下载html，css 浏览器在渲染
- html DOM树 形成了树，才能进行树的查询 tree的结构
- css解析执行 基于DOM树 树生成css渲染树(CSSOM 树) selector 属性构成 Render(渲染) tree 
遍历这颗渲染树，selector node css attribute 节点上的数据

js是及其耗性能的家伙
1.js跟java比，c/c++/java内存操作级别
js只有其1/5的速度，
应用场景 js 是目前唯一可以做前端的语言（go也有写），node后端，移动端
2.js是个第三者，
浏览器设计 DOM树+css渲染树，1.快速的把静态页面显示出来，第一要务
外加js，动态DOM Ajax
document.getElementById('')巨大的开销
js(语言世界)-》html+css DOM树世界
别的语言没有的结构,两边来回跑，就要优化性能

3.研究分屏加载html