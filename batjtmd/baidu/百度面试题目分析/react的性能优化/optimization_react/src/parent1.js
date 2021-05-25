import React,{Component}from 'react';
import Child from './Child'

class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            parentInfo:'parent',
            sonInfo:'son'
        }
        this.changeParentInfo=this.changeParentInfo.bind(this);
    }
    changeParentInfo(){
        this.setState({
            parentInfo:`改变了父组件state:${Date.now()}`
        })
    }
    render(){
        console.log('Parent Component render');
        return(
            <div>
                <p>{this.state.parentInfo}</p>
                <button onClick={this.changeParentInfo}>改变父组件state</button>
                <br/>
                <Child son={this.state.sonInfo}></Child>
            </div>
        )
    }
}

export default Parent;