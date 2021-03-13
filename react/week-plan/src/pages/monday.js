import React, { Component, Fragment } from 'react';
import { List, Typography, Divider } from 'antd';
class Monday extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <Fragment>
                 <div>星期一计划</div>
            <div style={{margin:'10px',width:'300px'}}>
            <List
            header={<div>早上九点</div>}
            footer={<div>晚上九点</div>}
            bordered
            // dataSource={data}
            dataSource={this.props.list}
            renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
            ></List>
        </div>
            </Fragment>
           
         );
    }
}
 
export default Monday;