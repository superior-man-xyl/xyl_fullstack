import React, { Component } from 'react';
import PropTypes from 'prop-types'//校验传递的值，防止业务逻辑错误，导致数据错误

class XiaojiejieItem extends Component {
    state = {  }
    // constructor绑定this
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    componentWillReceiveProps(){//子组件接收到父组件传递过来的参数，父组件render函数重新被执行，
        // 这个生命周期就会被执行，也就是属性本存在且改变时才执行
        console.log("子组件-componentWillReceiveProps---组件即将接收到Props属性");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount----组件从页面中删除的时候执行");
    }

//做一个组件的性能优化，使其不要一直重新渲染
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){//只有在父组件传来的content后，变化后才重新渲染
            return true;
        }else{
            return false;
        }
    }

    render() { 
        return ( 
            <li onClick={this.handleClick}>{this.props.name}为您服务-{this.props.content}</li>
         );//一般而言子组件是不能直接影响父组件数据的
    }
    handleClick(){
        // console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    }
}

//校验类型
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    name:PropTypes.string.isRequired//isRequired表示必须传递，不然就要有默认值，不能为空
}
//上面的name，不从父组件传递，这里给他设置个默认值
XiaojiejieItem.defaultProps={
    name:'获奖技师'
    // content:'无内容'
}
 
export default XiaojiejieItem;