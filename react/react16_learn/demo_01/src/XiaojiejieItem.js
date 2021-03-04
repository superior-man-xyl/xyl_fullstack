import React, { Component } from 'react';
import PropTypes from 'prop-types'//校验传递的值，防止业务逻辑错误，导致数据错误

class XiaojiejieItem extends Component {
    state = {  }
    // constructor绑定this
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
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
    content:PropTypes.string.isRequired,//isRequired表示必须传递，不然就要有默认值，不能为空
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    name:PropTypes.string.isRequired
}
//上面的name，不从父组件传递，这里给他设置个默认值
XiaojiejieItem.defaultProps={
    name:'获奖技师',
    content:'无内容'
}
 
export default XiaojiejieItem;