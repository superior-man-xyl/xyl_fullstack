import React,{Component} from 'react';
//使用shouldComponentUpdate
class Child extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate+++++");
        return false;
    }
    render(){
        console.log('Child Component render')
        return (
            <div>
                这是Child子组件
                <p>{this.props.son}</p>
            </div>
        )
    }
}
export default Child;