console.log([]==![]);//true
//为什么为true

console.log({}=={});//false 因为没有转变类型 地址不一样

console.log(Boolean(![]));//false
console.log(Boolean([]));//true
//那么为什么
// 关于隐式转换
// 首先，[]是不会 转换为Boolean的
//！优先级高于==
// 上面的==触发了类型转换
console.log(Number([]));//0    显式类型转换为了0
console.log([]==0);//true

console.log(Number(![]));//0
console.log(![]==0);//true

console.log(Number(false));//0
console.log(Number(![]));//0   
// 可以看出，![]先类型转换为了false了
//接着两边[]转为了0，右边false也转为了0
console.log([]==false);//true