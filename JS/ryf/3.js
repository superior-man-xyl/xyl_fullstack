/*
 * @Author: your name
 * @Date: 2020-12-27 11:50:19
 * @LastEditTime: 2020-12-27 18:53:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_pro\xyl_fullstack\JS\ryf\3.js
 */
//对象
// 抽象的概念 类
// 在es6以前没有class的关键字 
// 作为模板  父类
// var Cat={
//     name:'TOM',
//     color:'黄色',
//     sayHello(){
//         console.log('喵喵喵');
//     }
// }
// JS是基于原型的继承
var cat1={};
cat1.name='大毛';
cat1.color='黄色';

var cat2={};
cat2.name='二毛';
cat2.color='黑色';

// 太麻烦了，这样创建
// 在4中用函数来批量创建对象(相似对象)