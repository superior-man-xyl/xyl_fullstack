// var p=document.createElement('p');
// p.innerText='test';

// var root =document.getElementById('root');
// root.appendChild(p);

import React from 'react';//lib 数据绑定，模板编译等
import ReactDOM from 'react-dom';
//引入 test.jsx 模块
import TestComponent from './test.jsx';
//<TestComponent/>用一个自闭和标签
ReactDOM.render(<TestComponent/>,document.getElementById('root'))