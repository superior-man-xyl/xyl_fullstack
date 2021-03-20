// 每个reducer 模块是个独立的小地方 
// reducer + action`
import reducer from './reducer'; //  给reducer函数
import * as actionCreators from './actionCreators'; // actions

export {reducer, actionCreators};
