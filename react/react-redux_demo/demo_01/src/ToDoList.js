import React, { Component } from 'react';
import 'antd/dist/antd.css'//引入antdcss样式，才能使UI组件正常显示
// import {List, Input, Button} from 'antd' //UI分离后没用了
import store from './store/index'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import { changeInputAction , addItemAction ,deleteItemAction , getListAction} from './store/actionCreatores'
import ToDoListUI from './ToDoListUI'
import axios from 'axios'

// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
//将其放到数据仓库里

class ToDoList extends Component {
    constructor(props) {
        super(props);//super是为了传给父类
        // console.log(store.getState());
        this.state=store.getState();//赋值过来用了
        this.changeInputValue=this.changeInputValue.bind(this);
        this.storeChange=this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem=this.deleteItem.bind(this);

        store.subscribe(this.storeChange);//订阅redux的变化,一定要在上面的绑定的后面执行

    }

    //由axios获得数据
    componentDidMount(){//下面的get就是指get请求
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            // console.log(res)
            const data=res.data;
            const action=getListAction(data);
            store.dispatch(action);
        })
    }



    render() { 
        return ( //父组件向子组件传值
            <ToDoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
            ></ToDoListUI>
            //使用UI分离
            // <div style={{margin:'10px'}}>
            //     <div>
            //         <Input 
            //         placeholder={this.state.inputValue} //inputValue由reducer传过来，其中设置了默认值
            //         style={{width:'250px',marginRight:'10px'}}
            //         onChange={this.changeInputValue}
            //         value={this.state.inputValue}//用于最后添加后能实时的清空输入框，因为inputValue会为空
            //         ></Input>
            //         <Button 
            //         type='primary'
            //         onClick={this.clickBtn}
            //         >增加</Button>
            //     </div>
            //     <div style={{margin:'10px',width:'300px'}}>
            //         <List
            //         bordered
            //         // dataSource={data}
            //         dataSource={this.state.list}
            //         renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
            //         ></List>
            //     </div>
            // </div>
         );
    }
    storeChange(){
        this.setState(store.getState())
    }

    changeInputValue(e){
        console.log(e.target.value);
        // const action={//创建action对象，有两个属性，一个是对action的描述，一个是要改变的值
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action=changeInputAction(e.target.value);
        store.dispatch(action);//action创建好了后，就通过dispatch()方法传递给store，
        // store又会自动将action传递给redux，redux.js里就可以直接查看action
    }
    clickBtn(){
        // const action={
        //     type:ADD_ITEM
        // }
        const action=addItemAction();
        store.dispatch(action);
    }
    deleteItem(index){
        // console.log(index)
        // const action={
        //     type:DELETE_ITEM,
        //     index
        // }
        const action=deleteItemAction(index);
        store.dispatch(action);
    }
}
 
export default ToDoList;