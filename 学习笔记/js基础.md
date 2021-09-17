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
- 浏览器的同源策略（服务端没有同源策略，后端可能只是转发）和跨域(https://www.cnblogs.com/kgwei520blog/p/13667378.html)
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
## 手动捕获异常
```js
try{

}catch{

}finally{

}
```
## 自动捕获
```js
window.onerror = function(message, source, lineNum, colNum, error){

}
```
有短板：
- 对于跨域的js，比如CDN的，不会有详细的报错信息
- 对于压缩的js，需要配合sourceMap 反查到未压缩时的行和列
# 什么是JSON
- json是一种数据格式，本质是一段字符串
- json格式和js对象结构一致，对js语言更加友好
- window.JSON是一个全局对象：JSON.stringify JSON.parse
# 获取当前页面的url参数
- 传统方式，查找location.search
```js
    function query(name){
        const search = location.search.substr(1); // 类似于 array.slice(1),因为search返回的是 ?a=1&XXXXX
        const reg = new RegExp(``,i)
    }
```
- 新API，URLSearchParmaParams