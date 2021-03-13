const defaultState={
    inputValue:'写一个TodoList',
    list:[]
}



export default (state=defaultState,action)=>{
    // 编写业务逻辑
    if(action.type=='input_change'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState
    }
    if(action.type=='add_item'){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue=''
        return newState
    }
    return state;
}