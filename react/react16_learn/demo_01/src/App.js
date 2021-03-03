import React,{Component} from 'react'
import Xioajiejie from './Xiaojiejie'
//上面是使用了es6的特性，解构写法，相当于下面
// import React from 'react';
// const Component=React.Component;
class App extends Component{//App继承自Component
    render(){
        return(//括号是为了return里写多行代码
                // <h1>Hello World</h1>
                // JSX学习
            <div>
                <ul className="my-list">
                    <li>{true?'React is good':'React很好'}</li>
                    <li>i love it </li>
                </ul>
                <Xioajiejie />
            </div>
        )
        //不使用jsx的实现 使用React.createElement(element,[props],[...children])
        // var child1=React.createElement('li',null,'React is good');
        // var child2=React.createElement('li',null,'i love it');
        // var root=React.createElement('ul',{className='my-list'},child1,child2);
    }
}
export default App;//为了能引用模块，要暴露出去