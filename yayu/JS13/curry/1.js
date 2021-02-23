//第一版
var curry=function(fn){
    var args=[].slice.call(arguments,1);
    //绑定arguments([fn,参数,参数])为this，获取数组下标1以后的数值
    return function(){
        var newArgs=args.concat([].slice.call(arguments));
        return fn.apply(this,newArgs);//传参方式
    };
};
function add(a,b){
    return a+b;
}

//使用
var addCurry=curry(add,1,2);
console.log(addCurry());//3

addCurry=curry(add,1);
console.log(addCurry(2));//3

addCurry=curry(add);
console.log(addCurry(1,2));//3