import {createStore} from 'redux'
import reducer from './reducer'//引入管理文件，管理仓库

const store = createStore(reducer);

export default store;