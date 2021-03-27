import { combineReducers } from 'redux-immutable';//不可变的状态，更加纯函数

import {reducer as userReducer} from '../pages/User/Login/store';
// import {reducer as rankReducer} from '../pages/Rank/store';
//有利于合作开发，一人一个store文件,独立的模块，因为共用一个store会发生冲突

export default combineReducers({
    user:userReducer,
    // rank:rankReducer
})