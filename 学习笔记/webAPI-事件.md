# 编写一个通用的事件绑定函数

```js
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn);
}
//使用示例
const btn1 = getElementById("btn1");
bindEvent(btn1, "click", (event) => {
  event.preventDefault(); //阻止默认事件发生，比如a标签的跳转
  //要做的事情
});


//升级版，多一个适用标签的筛选
function bindEvent(elem, type, select, fn) {
  if (fn == null) {
    //说明只传了三个参数，select是可选项，说明第三个参数是fn
    fn = select;
    select = null;
  }
  elem.addListener(type, (event) => {
    const target = event.target;//e.target获取触发元素
    if (select) {
      //表示有select,代理绑定，要筛选出被代理的
      if (target.matches(select)) {// 如果元素被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。
        //matches表示一个触发的元素是不是**符合**一个选择器
        fn.call(target, event);
      }
    } else {
      //普通绑定
      fn.call(target, evrnt);
    }
  });
}
//使用示例：
//普通绑定
const btn1 = getElementById("btn1");
bindEvent(btn1, "click", function(event){
  event.preventDefault(); //阻止默认事件发生，比如a标签的跳转
  //要做的事情
  alert(this.innerHtml);
});

//代理绑定
const btn1 = getElementById("btn1");
bindEvent(btn1, "click",'a', function(event){
  event.preventDefault(); //阻止默认事件发生，比如a标签的跳转
  //要做的事情
  alert(this.innerHtml);
});
```

event.stopPropagation() 阻止事件冒泡

# 描述事件冒泡的流程

# 无限下拉的列表，怎么监听每个图片的点击

知识点：

# 事件绑定

# 事件监听

# 事件代理

DOM2级事件规定的事件流包括三个阶段：
- 1）事件捕获阶段
- 2）处于目标阶段
- 3）事件冒泡阶段

事件委托和事件代理？
- 事件委托： 也可以成为事件代理，也就是将原本绑定在子元素身上的事件 委托 给父元素。让父元素去监听事件。其原理是利用事件冒泡。

一个事件触发后，会在子元素和父元素之间传播，这个传播分三个阶段：
- 1.捕获阶段：从window对象依次向下传播，到达目标节点，即为捕获阶段。捕获阶段不会响应任何事件
- 2.目标阶段：在目标节点触发事件，即为目标阶段
- 3.冒泡阶段：从目标阶段依次向上传播，到达window对象，即为冒泡阶段。【事件代理就是利用事件冒泡的机制把里层元素需要响应的事件绑定到外层元素身上】
