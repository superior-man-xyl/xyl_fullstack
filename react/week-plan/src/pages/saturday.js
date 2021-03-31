import React, { Component, Fragment } from 'react';
import { List } from 'antd';
import store from '../store'

class Saturday extends Component {
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
                 <div style={{marginTop:'15%'}}>星期六计划</div>
            <div style={{margin:'5%',width:'70%'}}>
            <List
             header={<div className="time-color">早上九点开始</div>}
             footer={<div className="time-color">晚上九点结束</div>}
            bordered
            size='large'
            // dataSource={data}
            dataSource={this.state.list6}
            renderItem={(item,index)=>(<List.Item onClick={()=>{this.deleteItem(index)}}>{item}</List.Item>)}
            ></List>
        </div>
            </Fragment>
           
         );
    }
    storeChange(){
        this.setState(store.getState)
    }
    deleteItem(){
        console.log('6');
        const action={
            type:'delete-item6'
        }
        store.dispatch(action);
    }
}
 
export default Saturday;