//简单数据类型，只能被替换，不能被修改
// var str ='I am hero';

// console.log(str.toUpperCase());
// console.log(str);

//怎么使str不被改变呢   使用const又过不去编译
// const str='I am hero';

// str=str.toUpperCase();
// console.log(str);


// var a=5;
const a=5;
function A(b){
    //是不是纯函数？   看是不是会产生副作用！
    //不是纯函数   因为这行数里面可以操作a
    //如何使其变为纯函数？  将var a  改为 const a
    return a+b;
}

console.log(A(5));