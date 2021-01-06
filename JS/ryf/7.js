//阮一峰面向对象第二篇
function Animal(name){
    console.log(arguments);
    this.name=name;
    this.species="动物";
}
//Animal->Function
// 函数是一等对象，因为Object()都是其创立的，相互成就
//靠__proto__来拿到函数的原型链上的方法
console.log(Animal.__proto__.__proto__);

function Cat(name,color){
    this.name=name;
    this.color=color;
// 猫应该是Animal的子类，怎么实现？继承？ 
// - 如果Cat能访问到species，就算是了
    Animal.call(this);//借用一下，指定内部的this为当前函数，
    // 所以这里就调用了Animal，而它的this是cat正在创建的实例，
    // 所以在Animal中就为实例写了个属性species
    Animal.call(this,'jock','黄色');
    Animal.apply(this,['tom','黑色']);
    // call()和apply()的区别：第一个参数指定this，一样效果，
    // 而第二个参数就是传的参数，call直接传，第二个参数，第三个参数，有多少，列多少参数，
    // 而apply要用数组装下其他参数一起传
}

var cat1=new Cat('大毛','黄色');
console.log(cat1.species);