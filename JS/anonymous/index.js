// 事件执行函数，叫什么名字无所谓，直接要使用的
// addEventListener('click',()=>{
//     事件监听时用的就是匿名函数
// });

// 匿名函数必须要赋值给一个常量作为名字，才能调用
// function(){
//函数定义，不适合匿名函数的使用场景
// }
const funA=function(){//为funA赋了个匿名函数
    let foo=10;
    let bar=2;
    console.log(foo*bar);
}
//调用
funA();

// 下面不为匿名函数赋名直接以匿名函数方式使用（）调用
// 立即执行函数，以括号做分组
(function(){
    let foo=10;
    let bar=3;
    console.log(foo*bar);
})();//闭包的前奏

// foo,bar的值怎么传？
(function(foo,bar){
    console.log(foo*bar);
})(20,6);
// 要交给外界怎么办?
let res=(function(foo,bar){
    return foo*bar;
})(20,4);
console.log(res);