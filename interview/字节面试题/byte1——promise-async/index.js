//考察作用域

var name='world!';

(function(){
    if (typeof name === 'undefined') {
        var name = 'Jack'
        console.log('Goodbye ' + name);
      } else {
        console.log('Hello ' + name);
      }
})()

//相当于
(function(){
    var name;//var的变量提升   let就不会
    if (typeof name === 'undefined') {
        name = 'Jack'
        console.log('Goodbye ' + name);
      } else {
        console.log('Hello ' + name);
      }
})()

//下面一样的
// function abc(){
//     if (typeof name === 'undefined') {
//         var name = 'Jack'
//         console.log('Goodbye ' + name);
//       } else {
//         console.log('Hello ' + name);
//       }
// }

// abc();