 - instanceof
 - instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 依据原型链的原理，其instanceof 操作符用于检查一个对象是否属于某个特定的 class。
 是就返回true ，否就返回false
 同时，它还考虑了``继承``
 - 通过对instanceof的底层实现体现出是否对原型链理解的够深。

 - 原型对象三者关系
类（构造函数+原型对象）
1. Constructor.prototype==原型对象
2. 原型对象.constructor==构造函数
3. 实例对象.__proto__==原型对象