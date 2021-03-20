//首页，singer 排行榜 

//模块化 
import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../pages/Recommend/store/index'

export default combineReducers({
   recommend:recommendReducer,
  // singer:,
  // rank:,

})
