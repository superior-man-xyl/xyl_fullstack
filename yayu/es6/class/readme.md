- es6 class 与 es5 构造函数+prototype有什么关系？
    class是语法糖

- babel 的用场
    es6 class 不停更新，每个版本不一样
    node版本不一样(一些服务器上可能很低)，支持不一样，于是存在风险
    且，js的运行环境太复杂了，不是单纯的chrome，还有很多不同的浏览器
    babel转义后就好了，Babel解决这些，写出来的

- 一线公司问？
    请问es6 class 关键字除了实现2.js的时候有什么不一样的地方吗？
    - es6 class 构造函数在constructor上
        es6中的构造函数只能在new下使用，不能作为普通函数执行（会报错），而es5中function创建的构造函数可以
        - 如果我要设计的话？会如何实现？

    - 1.js Person.prototype 不可枚举
        Object.keys()没用了,要用Object.getOwnPropertyNames()才能得到class定义的属性
        Object.getOwnPropertyNames返回的是对象所有自己的属性(可调用)，
        而Object.keys(obj)则返回的是所有可枚举属性(可枚举)

    - ES6还有比ES5实现更为丰富的地方
        属性也可以定义在类的最顶层，属性的更好写法

    - 手写一个babel 手写es6 babel



1. babel js 转义器
其帮助 es6 class -> es6 function