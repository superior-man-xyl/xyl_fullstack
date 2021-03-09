import React, { Component } from 'react';//使用无状态组件就可以不需要Compoent了
import 'antd/dist/antd.css'//引入antdcss样式，才能使UI组件正常显示
import {List, Input, Button} from 'antd'

//使用无状态组件优化性能
const ToDoListUI=(props)=>{//这里传入了props就直接使用props，不要this.props了
    return( 
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                placeholder={props.inputValue} //inputValue由reducer传过来，其中设置了默认值
                style={{width:'250px',marginRight:'10px'}}
                onChange={props.changeInputValue}
                value={props.inputValue}//用于最后添加后能实时的清空输入框，因为inputValue会为空
                ></Input>
                <Button 
                type='primary'
                onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                bordered
                // dataSource={data}
                dataSource={props.list}
                renderItem={(item,index)=>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                ></List>
            </div>
        </div>
     );
}

//下面是函数式组件
// class ToDOListUI extends Component {
//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//                 <div>
//                     <Input 
//                     placeholder={this.props.inputValue} //inputValue由reducer传过来，其中设置了默认值
//                     style={{width:'250px',marginRight:'10px'}}
//                     onChange={this.props.changeInputValue}
//                     value={this.props.inputValue}//用于最后添加后能实时的清空输入框，因为inputValue会为空
//                     ></Input>
//                     <Button 
//                     type='primary'
//                     onClick={this.props.clickBtn}
//                     >增加</Button>
//                 </div>
//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List
//                     bordered
//                     // dataSource={data}
//                     dataSource={this.props.list}
//                     renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                     ></List>
//                 </div>
//             </div>
//          );
//     }
// }
 
export default ToDoListUI;