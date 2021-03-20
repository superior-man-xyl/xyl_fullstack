import {applyMiddleware,createStore,compose} from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
))

//reducer tree 单一状态树，是一个实例，数据统一管理，

export default store
