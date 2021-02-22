//读懂源码  这里要实现的是，为原型对象添加一个属性，但不要被遍历，就行class
function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
        throw new TypeError('Cannot call a class as a function');
    }
}
var _createClass=(function(){
    //模块化，闭包做
    // 传统的es5 没有模块化，比较弱
    function defineProperties(target,props){
        console.log(target,props);
        for(var i=0;i<props.length;i++){
            // console.log(props[i],'-----');
            var descriptor=props[i];

            descriptor.enumerable=true;

            Object.defineProperty(target,descriptor.key,descriptor);//
        }
    }

    //给类添加些方法
    return function(Constructor, protoProps) {
        console.log(Constructor, protoProps);
        if(protoProps){//如果有添加在原型链上的方法
            //封装  es6如何定义属性？defineProperty方法？
            defineProperties(Constructor.prototype,protoProps);//把一件事情交出去
        }
    }
})()


var Person =function (){
    //闭包
    //class 方法不可以被enum
    function Person(name){
        _classCallCheck(this,Person);
        this.name=name;
    }
    //添加一个模块 enum prototype属性 封装
    _createClass(Person,[{
        key:'sayHello',
        value:function sayHello(){
            return 'hello,I am'+this.name
        }
    }])
    return Person;

}()//立即执行函数
console.log(Person);

var person=new Person("xyl");  //
console.log(Object.keys(Person.prototype))
console.log(Object.getOwnPropertyNames(Person.prototype));