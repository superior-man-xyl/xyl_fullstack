# JS 的灵魂在于函数，函数的灵魂在匿名函数。

- 匿名函数
```js
1.()=>{}
2.function(){}
和立即执行结合起来
(function(){

})()
```

- 作为图书管理系统，写一个书的入库类
JS里面 面向对象 class关键字比较晚出现，用function来构造类
JS 类有点像火车，分成火车头，车身
```js
//单独构造函数就可以成为一个类
let book=function(isbn,name,author){
    this.isbn=isbn;
    this.author=author;
    this.name=name;
}
```
构造器
- 构造函数与普通函数的区别？
1.使用构造函数（constructor）能够生成很多实例
使用this...
来为新实例赋值属性。在构造函数中，this指向的就是正在创建的新对象。

2.构造函数的名字首字母一定要大写（虽然不大写也不会报错），但要区分
3.运行时，构造函数要使用new来执行
4.this指向实例
5.对象上，原型对象都是Object，
6.Object是顶层对象，也是一个函数  new Object(){}
7.任何一个函数都有一个prototype属性 火车身 
8.任何一个对象实例都一定有__proto__私有属性，指向原型对象，所以js的面向对象是基于原型的(不像其他语言是像血缘式的)
jsbook.__proto__==Book.prototype;//true
jsbook.display();基于原型对象继承父类的方法

```js
jsbook.__proto__.__proto__;
//指向object   {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
jsbook.__proto__.__proto__.__proto__;
// 下面没有了 null
```
9.原型链
只要链上有的东西，就可以调用,自己没有这个方法就会取原型链上找，一层一层找，直到找到，没有就返回undefined

jsbook.hasOwnProperty('display'):方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。

Book.Prototype.isPrototypeOf(jsbook):方法用来检测一个对象是否存在于另一个对象的原型链中，如果存在就返回 true，否则就返回 false。

10.js关键字class，只是语法糖，只是为了方便，js中不存在这东西