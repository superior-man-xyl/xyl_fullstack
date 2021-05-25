import React,{Component} from 'react'

class Child extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.props.parentInfo,'+++',nextProps.parentInfo);
        return this.props.parentInfo!==nextProps.parentInfo;
        //这样比对，其实是相同的，因为传的是复杂数据类型，地址不变
        //就一直返回false
    }

    updateChild(){
        this.forceUpdate();//强制更新
    }

    render(){
        console.log('Child Component render')
        return (
            <div>
                这是Child子组件
                <p>{this.props.parentInfo[0].name}</p>
            </div>
        )
    }
}
export default Child;