// Cart是函数（对象）
{
let a;//let（es6里的，与var有差别的,let的作用域只在代码块中）声明一个变量 这里a还是undefined
// undefined:表示类型未定义
console.log(a);
a=1;//赋值后，a是1；
console.log(a);
}

// const:定义的变量不可以修改，而且必须初始化
const arr=[1,2,3];
console.log(typeof arr);//object
const obj={}
// obj.
arr.push(4);
const a="hello";
console.log(typeof a);//string
// const a="world";
console.log(a);


function Cart(){
    this.type="择耳";
}
Cart.prototype.sayHello=function(){
    console.log('喵');
}