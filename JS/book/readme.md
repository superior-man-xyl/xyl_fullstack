- 面向对象的私有属性
this._ 代码编写规范作为私有属性的约定
get set 方法的创建

大部分情况下Object.getOwnPropertyNames()与Object.keys(obj)的功能是一样的，
getOwnPropertyNames
获取对象自身的可枚举和不可枚举属性，不包括属性名为Symbol值的属性
Object.keys()
获取对象自身的可枚举属性，不包括属性名为Symbol值的属性


- 阮一峰es6手册 这个主要是es6手册的第六章class的内容
```javascript
class Point{
    toString(){
       
    }
}
Point.prototype.constructor===point;
Point.prototype.toString
```