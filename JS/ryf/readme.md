<!--
 * @Author: your name
 * @Date: 2020-12-27 10:15:25
 * @LastEditTime: 2020-12-28 11:24:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_pro\xyl_fullstack\JS\ryf\readme.md
-->
- 阮一峰

1. javascript变量的数据类型由值决定，
常量（ES6之前没有常量  之前一般用var）const
- 类型不可改变（常量指的就是类型不可改变，数组和普通对象都是不同的）
- 简单类型的值不可变，复杂数据类型的值是可以改变的
- js里的类型：数值型，字符串，布尔值，undefined，null,symbol,
对象（数组，函数）

2.typeof [1,2,3]; 如果不知道是数组？（三种方法typeof运算符，instanceof运算符，Object.prototype.tostring方法）
区分简单数据类型和复杂数据类型
复杂数据类型中function
typeof可以正确（细致）的得到数据类型的，但不能区分对象的不同类型（另两种方式判断能区分对象的多种类型,也就是类的不同）
number string Boolean null undefined symbol object（array ，function）


3.object.prototype.toString.call()核心,call方法里第一个参数放一个对象，this就指向该对象。

 call()和apply()的区别：第一个参数指定this，一样效果，
    而第二个参数就是传的参数，call直接传，第二个参数，第三个参数，有多少，列多少参数，
    而apply要用数组装下其他参数一起传

- call apply 借用方法，fn.call(绑定this,参数1,参数2，参数3，参数4)
fn.apply(绑定this，[参数1,参数2，参数3，参数4])

# 继承的几种实现方式
1.构造函数绑定  7.js  call apply实现
2.原型函数prototype模式    8.js   
3.直接继承prototype   9.js
4.利用空对象作为中介    10.js

2和3相比是，3的优点是效率比较高（不用执行和建立Animal的实例），
缺点是Cat.prototype和Animal.prototype指向同一个对象，在理解上有点不妥，会改变父类的原型对象
2的效率不高