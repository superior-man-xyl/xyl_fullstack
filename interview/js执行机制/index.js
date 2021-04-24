// showName();
// console.log(myName);
// var myName='xxxx';
// function showName(){
//     console.log('sssss');
// }
//输出
// sssss    
// undefined
//为什么变量声明会提升

// var a=2;
// function add(){
//     var b=10;
//     return a+b;
// }
// console.log(add());//12
// 怎么管理执行上下文——通过栈的数据结构来管理


// var a = 2
// function add(b,c){
//   return b+c
// }
// function addAll(b,c){
//     var d = 10
//     result = add(b,c)
//     return  a+result+d
// }
// console.log(addAll(3,6));//21

// var myname="xyl";
// function say(){
//     console.log(myname);
// }
// function foo(){
//     var myName='jjj';
//     say();
// }
// foo();//输出 xyl



