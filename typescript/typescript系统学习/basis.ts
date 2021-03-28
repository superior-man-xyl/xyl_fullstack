//声明一个变量a,同时指定它的类型为number

let a:number;

//a的类型被设置为了number，在以后使用就必须是number，不然报错
a=10;
a=20;
// a=hello;//报错  避免了对变量赋错值的情况  但是是可以成功编译为js的，只是编写的时候提醒

let b:string;

//ts编译成js后可以选择编译为任意版本的javascript

let c:boolean=true;//变量的声明和赋值同时进行时，TS可以自动对变量进行变量检测
// c=123;//报错
c=false;

function sum(a:number,b:number):number{//规定了参数的类型和返回值的类型都要是number
    // return a+'hi';//报错
    return a+b;
}
console.log(sum(12,33));