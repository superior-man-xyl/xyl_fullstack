# DOM-diff 阿里这类等级公司发offer的前奏题
- 读源码的方法
1. 边写边读，聚焦主题
    为什么React 不用DOM，而是MVVM？
    DOM性能不行，太频繁时性能消耗特别大，还会涉及重绘重排等
    所以React使用虚拟DOM Virtual DOM 内存做
    组件树=》DOM树 其在内存中的操作相比浏览器中一堆杂事，会快很多   
    n叉树 内存树中修改，累计完成了后，再一次性在真实DOM中修改，提高效率
    内存中的两颗树进行比较的方法就是DOM-DIFF算法 prevState newState 之前的树和新树

2. 先通俗理解
    状态是在改变的，useState 状态驱动界面，而不是DOM操作来驱动
    虚拟DOM就是隐藏在其下，
    在内存中，创建一个虚拟DOM？这一个虚拟DOM怎么创建？
    经过状态改变后，创建一个新状态的VirtualDOM
    这两颗树进行比较时(树的查找，结点的比对)
    得到修改的集合，一次性同步到真实的DOM中

- 如何把DOM用virtualDOM来表示
<ul>
    <li class="item">白津亭</li>
    <li class="item">婷婷</li>
</ul>

<ul>
    <li class="item current">白津亭</li>
    <li class="item">婷婷</li>
    <li>王艳杰</li>
</ul>

[
    {attr:'current'},
    {appendChild:document.createElement('li')}
]

- 虚拟DOM树的表现形式，是递归JSON
```
{
    tag:'ul',
    props{
        class:'list'
    },
    children:[
        tag:'li',
        props:{
            class:'item'
        },
        children:['name']
    ]
}
```

- 利用createElement\setAttribute\appendChild
  将在内存中生成虚拟DOM树

- 首次渲染
