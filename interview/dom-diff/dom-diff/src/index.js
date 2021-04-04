import {createElement,render,renderDOM} from './element';
import React from 'react';
import ReactDOM from 'react-dom';
//使用createElement方法构建DOM=》VirtualDOM
/*
在内存中创建，模拟真实DOM的层次，节点，属性，子节点
使用递归的方式构造下面这颗树，直到最后结点是一个文本结点时就退出
相同的类似的操作 1.创造结点 2.设置属性 3.子节点
*/
{/* <ul class="list">
    <li class="item">白津亭</li>
    <li class="item">婷婷</li>
</ul> */}
//DOM树的表达转换形式
let virtualDOM=createElement('ul',{
  class:'list',
  // id:""
  // src:''
},[
  createElement('li',{
    class:'item'
  },['白津亭']),
  createElement('li',{
    class:'item'
  },['婷婷'])
]);

let el=render(virtualDOM);
console.log(virtualDOM);
console.log(el);

let virtualDOM2=createElement('ul',{
  class:'list-group'
},[
  createElement('li',{class:'item active'},['七里香']),
  createElement('li',{class:'item'},['一千年以后']),
  createElement('li',{class:'item'},['菊花台'])
]);

renderDOM(el,document.getElementById('root'));
//补丁
let patches=diff(virtualDOM,virtualDOM2);
console.log(pathes);