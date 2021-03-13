import React, { Component } from 'react';
// import store from './store';//使用映射后不再需要，在index.js入口文件中有提供器提供
import {connect} from 'react-redux'//连接器

//优化为无状态组件
const TodoList =(props)=>{
    let {inputChange, inputValue,clickButton} =props;//解构赋值，使其这些值在下面使用时更加清爽
    return ( 
        <div>
            <div>
                {/* <input value={this.state.inputValue}/>
                映射后 */}
                <input 
                value={inputValue}
                onChange={inputChange}
                />
                <button
                onClick={clickButton}
                >提交</button>
            </div>
            <ul>
                {/* <li>写一个TodoList</li> */}
                {
                    props.list.map((item,index)=>{
                        return(<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
     );
}


// class TodoList extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     // this.state = store.getState();//使用映射后不在需要
//     // }
//     render() { 
//         return ( 
//             <div>
//                 <div>
//                     {/* <input value={this.state.inputValue}/>
//                     映射后 */}
//                     <input 
//                     value={this.props.inputValue}
//                     onChange={this.props.inputChange}
//                     />
//                     <button
//                     onClick={this.props.clickButton}
//                     >提交</button>
//                 </div>
//                 <ul>
//                     {/* <li>写一个TodoList</li> */}
//                     {
//                         this.props.list.map((item,index)=>{
//                             return(<li key={index}>{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//          );
//     }
// //     inputChange(e){
// //         console.log(e.target.value);

// //     }
// // }

// }

const dispatchToProps=(dispatch)=>{
    return {//将方法写到这里面来
        inputChange(e){
            // console.log(e.target.value);
            let action={
                type:'input_change',
                value:e.target.value
            }
            dispatch(action);
        },
        clickButton(){
            // console.log('111')
            let action={
                type:'add_item'
            }
            dispatch(action)
        }
    }
} 

const stateToProps=(state)=>{//将数据映射给props
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
 
// export default TodoList;
export default connect(stateToProps,dispatchToProps)(TodoList)