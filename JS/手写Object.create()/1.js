function Create(proto){
    function f(){};
    f.prototype=proto;//proto是参数对象
    return new f();//返回创建的新对象，其新对象的原型直接就是其构造函数。
}
function Person(){

}
const we=Object.Create(Person);
const me=Creat(Person);