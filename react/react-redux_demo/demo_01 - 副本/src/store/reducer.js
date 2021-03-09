//index.js中虽然创建好了数据储存仓库，但是很混乱，
// 需要一个具有管理能力的模块进行管理，就是reducer
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './actionTypes'

//reducer 必须是纯函数 即返回值必须与传入值有关
const defaultState={
    inputValue:'Write something',
    list:[
        '早8点开晨会，分配今天的开发工作',
       '早9点和项目经理作开发需求讨论会',
       '晚5:30对今日代码进行review'
    ]
}
export default (state=defaultState,action)=>{
    // console.log(state,action);
    //state指的是原始仓库的状态
    //action是action新传递的状态
    //reducer中只能接收state，不能改变state
    if(action.type===CHANGE_INPUT){//判断是否是我们要的那个type的action
        let newState=JSON.parse(JSON.stringify(state));//深度拷贝state
        newState.inputValue=action.value;
        return newState;//将新的state返回给store，在仓库里进行修改
    }
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);//将新的内容添加
        newState.inputValue="";
        return newState;
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}