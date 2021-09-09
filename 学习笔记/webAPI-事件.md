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
