import React,{Component} from 'react'
//上面是使用了es6的特性，解构写法，相当于下面
// import React from 'react';
// const Component=React.Component;
class App extends Component{//App继承自Component
    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}
export default App;//为了能引用模块，要暴露出去