//对比1.js
function Person(name){//构造函数
    this.name=name;
}

Person.prototype.sayHello = function() {
    return 'hello, I am ' + this.name
}

// const kevin = new Person('Kevin');
// console.log(kevin.sayHello());
// Person('Kevin');

console.log(Person.prototype);//输出{ sayHello: [Function (anonymous)] }

console.log(Object.keys(Person.prototype));//[ 'sayHello' ]

console.log(Object.getOwnPropertyNames(Person.prototype));//[ 'constructor', 'sayHello' ]