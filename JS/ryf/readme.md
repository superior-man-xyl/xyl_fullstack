- 阮一峰

1. javascript变量的数据类型由值决定，
常量（ES6之前没有常量  之前一般用var）const
- 类型不可改变（常量指的就是类型不可改变，数组和普通对象都是不同的）
- 简单类型的值不可变，复杂数据类型的值是可以改变的
- js里的类型：数值型，字符串，布尔值，undefined，null,symbol,
对象（数组，函数）

2.typeof [1,2,3]; 如果不知道是数组？
区分简单数据类型和复杂数据类型
复杂数据类型中function
typeof可以正确（细致）的得到数据类型的（能区分对象的多种类型,也就是类的不同）
number string Boolean null undefined symbol object（array ，function）


3.object.prototype.toString.call()核心
