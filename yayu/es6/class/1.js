// es6提供了class关键字
//语法糖，其实它还是原型式继承
//class使其像大型语言，有传统面向对象的写法
class Person{
    //属性新写法
    count=0//node低版本不支持 于是babel的用处来了
    constructor(name){
        this.name=name;
        // this.count=0 和顶上的新写法一样
    }
    sayHello(){
        return 'hello,I am'+this.name
    }
}
const kevin=new Person('Kevin');
console.log(kevin.__proto__,Person.prototype);//{} {}
console.log(kevin.sayHello());//hello,I amKevin
//为什么原型上没有，却能访问sayHello

// console.log(kevin.sayHello());
// Person();

console.log(Person.prototype);//输出{}，空对象

console.log(Object.keys(Person.prototype));//[],空数组  可枚举属性为空
//ES6 里可枚举怎么实现？
console.log(Object.getOwnPropertyNames(Person.prototype));//[ 'constructor', 'sayHello' ]