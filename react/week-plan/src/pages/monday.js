import React, { Component, Fragment } from 'react';
import { List } from 'antd';
import store from '../store'

class Monday extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState(),'+++');
        this.state=store.getState();
        this.storeChange=this.storeChange.bind(this);//转变this指向
        store.subscribe(this.storeChange);//订阅redux状态
    }
    render() { 
        return ( 
            <Fragment>
                 <div>星期一计划</div>
            <div style={{margin:'30px',width:'600px'}}>
            <List
            header={<div className="time-color">早上九点开始</div>}
            footer={<div className="time-color">晚上九点结束</div>}
            bordered
            size='large'
            // dataSource={data}
            dataSource={this.state.list1}
            renderItem={(item,index)=>(<List.Item onClick={()=>{this.deleteItem(index)}}>{item}</List.Item>)}
            ></List>
        </div>
            </Fragment>
           
         );
    }
    storeChange(){
        this.setState(store.getState)
    }
    deleteItem(index){
        console.log('1');
        const action={
            type:'delete-item1',
            value:index
        }
        store.dispatch(action);
    }
}
 
export default Monday;