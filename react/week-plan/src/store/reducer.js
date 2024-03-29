const defaultState = {
  inputValue: "计划踢一天球",
  dayValue: 1,
  list1: [
    "使用牙刷刷牙，刷够五分钟",
    "使用右手吃饭，吃够五公斤",
    "使用身体玩耍，玩耍到吃饭",
  ],
  list2: ["使用牙刷刷牙，刷够五分钟"],
  list3: ["使用牙刷刷牙，刷够五分钟"],
  list4: ["使用牙刷刷牙，刷够五分钟"],
  list5: ["使用牙刷刷牙，刷够五分钟"],
  list6: ["使用牙刷刷牙，刷够五分钟"],
  list7: ["使用牙刷刷牙，刷够五分钟"],
}; //默认数据
export default (state = defaultState, action) => {
  // console.log(state,action);
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "day") {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.dayValue = action.value;
    return newState;
  }
  if (action.type === "clickBtn") {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    switch (parseInt(newState.dayValue)) {
      case 1:
        newState.list1.push(newState.inputValue);
        break;
      case 2:
        newState.list2.push(newState.inputValue);
        break;
      case 3:
        newState.list3.push(newState.inputValue);
        break;
      case 4:
        newState.list4.push(newState.inputValue);
        break;
      case 5:
        newState.list5.push(newState.inputValue);
        break;
      case 6:
        newState.list6.push(newState.inputValue);
        break;
      case 7:
        newState.list7.push(newState.inputValue);
        break;
    }
    return newState;
  }
  if (action.type === "delete-item1") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list1.splice(action.value, 1);
    return newState;
  }
  if (action.type === "delete-item2") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list2.splice(action.value, 1);
    return newState;
  }
  if (action.type === "delete-item3") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list3.splice(action.value, 1);
    return newState;
  }
  if (action.type === "delete-item4") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list4.splice(action.value, 1);
    return newState;
  }
  if (action.type === "delete-item5") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list5.splice(action.value, 1);
    return newState;
  }
  if (action.type === "delete-item6") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list6.splice(action.value, 1);
    return newState;
  }
  if (action.type === "delete-item7") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list7.splice(action.value, 1);
    return newState;
  }
  return state;
};
