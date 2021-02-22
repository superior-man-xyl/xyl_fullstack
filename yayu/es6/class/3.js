//babel也是可以写的，  源码分析

//  1. Person class -> function new 普通调用报错？
// 转义出的代码 不可能是class 必须是function
function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
        throw new TypeError('Cannot call a class as a function');
    }
}

var Person = function Person(name){//es5
    //函数的运行方式，不是new的方式
    //利用其this不一样
    // if(this instanceof Person){//以普通函数调用时
    //     throw new TypeError('Cannot call a class as a function');
    // }
    _classCallCheck(this,Person);//封装，Babel webpack 工作流套件 把一些任务封装了
}
new Person();//new方式调用
Person();//普通函数调用   报错！！！