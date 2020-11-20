const numbers=[3,62,234,7,23,74,23,76,92];
const arr=[];
//方法一
// const largeNumbers=numbers.forEach((e,i)=>{
//     if(e>70){
//         arr.push(e);
//     }
// })
//forEach 基础上，只有一个number参数可以省略括号
//filter内置函数
const cb=number=>{
    return number>70
}
//const cb=number=>number>70;//只有一句代码，可以省略大括号和return
const largeNumbers=numbers.filter(cb);
console.log(largeNumbers);