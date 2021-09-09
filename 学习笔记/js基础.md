# typeof 能判断哪些类型？
- undefined string number boolean symbol
- object  (typeof null == 'object')
- function 
# 何时使用=== 何时使用==
一个技巧：除了==null外，其他一律使用===
if(obj.a==null)相当于if(obj.a===null||obj.a===undefined)
# 值类型和引用类型的区别
# 手写深拷贝，为什么很多都是使用浅拷贝，而不是直接使用深拷贝

# 原型和原型链考题

## 如何判断一个变量是否是数组，这里引申到原型
## 手写一个简易的JQuery，考虑插件和扩展性
## class的原型本质，怎么理解？ 

## [10,20,30,40].map(parseInt)输出什么
```js
//拆解
[10,20,30,40].map((num,index)=>{
    return parseInt(num,index);// index为0 和10 都是十进制
})
```

# jsonp是不是AJAX
- 浏览器的同源策略（服务端没有同源策略，后端可能只是转发）和跨域
- img，script等标签可以跨域，因为它们不得不具有请求外部资源的能力

# 函数声明和函数表达式的区别
- 函数声明 function fn(){...}
- 函数表达式 const fn = function(){...}
- 函数声明会在代码执行前预加载（整个提升到代码前面，相当于任何位置都可以直接用了），而函数表达式不会
# new Object()和Object.create()的区别
- {}等同于new Object(),原型为Object.prototype
```js
obj1={};
obj2=new Object(obj1);
console.log(obj1==obj2);//true
```
- Object.create(null)没有原型，因为Object.create(原型函数)可以用来指定原型

# 正则表达式
- 字符串 字母开头，后面字母数字下划线，长度6-30
``const reg = /^[a-zA-Z]\w{5,29}$/``

# 手写字符串trim，保证浏览器的兼容性（其实就是使用正则表达式就可保证兼容）
```js
String.prototype.trim= function(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'')
}
```
# 如何获取js程序中的异常
# 什么是JSON
# 获取当前页面的url参数