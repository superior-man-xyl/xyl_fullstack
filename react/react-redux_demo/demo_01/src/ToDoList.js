import React, { Component } from 'react';
import 'antd/dist/antd.css'//引入antdcss样式，才能使UI组件正常显示
import {List,Botton,Input, Button} from 'antd'
import store from './store/index'

// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
//将其放到数据仓库里

class ToDoList extends Component {
    constructor(props) {
        super(props);//super是为了传给父类
        this.state = {  }
        console.log(store.getState());
        this.state=store.getState();//赋值过来用了
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}}></Input>
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                    bordered
                    // dataSource={data}
                    dataSource={this.state.list}
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
         );
    }
}
 
export default ToDoList;