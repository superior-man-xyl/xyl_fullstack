        //传统写法

import React, { Component,Fragment } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
         this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
        console.log(`组件挂载上去，count值：${this.state.count}`);
    }
    componentDidUpdate(){
        console.log(`组件更新，count值：${this.state.count}`);
    }
    render() { 
        return ( 
            <Fragment>
                <div>
                    this is {this.state.count} time
                </div>
                <button onClick={this.handleClick}>click me</button>
            </Fragment>
         );
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }
}
 
export default App;