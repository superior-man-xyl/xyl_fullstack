/*
 * @Author: xyl
 * @Date: 2020-12-27 12:17:41
 * @LastEditTime: 2020-12-27 14:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_pro\xyl_fullstack\JS\ryf\6.js
 */
//使用构造函数来批量创建对象

function cat(name,color){

    this.nmae=name;//this指向构造函数的实例
    this.color=color;
    this.type='猫科动物';
    //这里的eat函数可以放到prototype里,
    // 这样就没必要对每个对象建一个函数了
    this.eat=function(){
        console.log("老鼠");
    }
}
cat.prototype.say=function(){//cat的实例公用的
    console.log("喵喵");
}
// 实例化
// new的执行过程,一定使用new
// new的过程一定会执行cat构造函数,
// 如果把一些相同的属性函数都放在构造函数里,不放到原型对象里
// 那么每次new,执行cat就会有大量的重复代码,消耗内存
var cat1=new cat("大毛","黄色");
var cat2=new cat("二毛","黑色");

// 因为用来同一个构造函数,所以他们的原型是同一个
// console.log(cat1.constructor==cat2.constructor);//true
// console.log(cat1.constructor);
//输出function:cat
//constructor: constructor 属性返回对创建此对象的数组函数的引用。
// 即表示其的构造函数
// console.log(cat1 instanceof cat);
// instanceof:表示判断某对象是否属于某构造函数
// console.log(cat2 instanceof cat);

console.log(cat1.__proto__);//{ say: [Function (anonymous)] }