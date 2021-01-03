//使用构造函数来批量创建对象

function cat(name,color){
    this.name=name;//this指向构造函数的实例
    this.color=color;
}
// 实例化
var cat1=new cat("大毛","黄色");
var cat2=new cat("二毛","黑色");

// 因为用来同一个构造函数,所以他们的原型是同一个
console.log(cat1.constructor==cat2.constructor);//true
console.log(cat1.constructor);
//输出function:cat
//constructor: constructor 属性返回对创建此对象的数组函数的引用。
// 即表示其的构造函数
console.log(cat1 instanceof cat);
// instanceof:表示判断某对象是否属于某构造函数
console.log(cat2 instanceof cat);