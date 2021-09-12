// var fun=()=>{
//     this.a=10;
// }
// var func=new fun();
// console.log(func);
let a = 'Hello World!';

function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}

function second() {
  console.log('Inside second function');
}
first()