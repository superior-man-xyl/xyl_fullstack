import React,{PureComponent} from 'react'
//使用pureComponent
class Child extends PureComponent{
    constructor(props){
        super(props);
        this.state={}
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