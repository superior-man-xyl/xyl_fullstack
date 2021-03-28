//ts可以使用字面量声明
let a:11;
// a=10;//报错

//什么的用处，限制某变量在某几个值之间
let sex:"male"|"female";
// sex="ss";//出错，必须是上面两个值其中的一个
sex="male"

let c:boolean|string;//写两种类型
c=true;
c="a";

//any :任意类型，一个变量设置类型为any，就相当于关闭了TS
let d:any;
d=123;
d="aaa";
d=true;

let e;//隐式的any
//这两种any都最好不用
// any值的变量可以随意赋值给其他类型固定的变量，这非常危险
e=123;
c=e;//c变成了123，却没报错

let f:unknown;//unknown 表示未知类型的值
// 有什么用呢？
// 比any安全
// 因为未知unknow类型，赋值给其他变量会报错，就算是同一个类型
//所以unknow是类型安全的any，不能直接赋值给别的变量，判断后可以
f=true;
// c=f;//报错
if(typeof f==='boolean'){
    c=f;//没报错了
}

c=f as boolean;//类型断言 也不报错 自己告诉编译器这f是个什么类型
//或
c=<boolean>f;

//void  用来表示空，用于函数就是表示没有返回值
function fn():void{
    // return true;//报错
    return;//后面不跟值，就不会报错，相当于没有返回值
}

//never 表示永远不会返回结果
function fn2():never{
    throw new Error('报错了！');//这样的函数一般用于报错
    // return;//后面不跟值，也报错
}

//复杂数据类型


let h:object;
h={};
h=function(){};
//限制太松散，不好

let j:{name:string};//这种方式就限制严格
j={name:"xyl"};//记住这种语法
// j={name:"xyl",age:20}//报错

let k:{name:string,age?:number}//?问号表示有没有都行
k={name:"xyl"};

//或者 要是有多个时，不想都列出来
let l:{name:string,[propName:string]:any}//表示除了name，其他什么变量有或没有都没关系
l={name:"xyl",a:1,b:2};

//另一种函数声明
let m:(a:number,b:number)=>number
//相当于 let m=function(a:number,b:number):number{}

//数组 string[] 表示字符串数组
let i:string[];
e=['a','b','c']
//同理  number[]表示数值数组
//等于下面  这两种表示
let g:Array<number>;
// 任意类型就算any

/**
 * 元组，元组就是固定长度的数组
*/
// 例如
let q:[string,string];//限制两个长度，两个都是string


//枚举
enum Gender{
    Male=1,
    Female=0
}
let z:{name:string,gender:Gender};
z={
    name:"xyl",
    gender:Gender.Female
}

//& 表示要同时满足
let p:{name:string}&{age:number};//两个都要有

//取别名
type myType=string|1|2|3;//应用于这样特别长的类型
