import {createStore} from 'redux'

import reducer from './reducer'

const store =createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//使用createStore方法建立仓库
export default store