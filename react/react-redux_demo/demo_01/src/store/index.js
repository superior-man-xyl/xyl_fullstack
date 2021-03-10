//作为整个项目的store文件，管理store
import { createStore , applyMiddleware , compose} from 'redux'//引入createStore方法
import reducer from './reducer'//把reducer引入到store中,再创建store时，以参数的形式传递给store
import thunk from 'redux-thunk'

//使用增强函数
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

//createStore只能接收两个参数
const store = createStore(reducer,enhancer);//使用增强函数写的enhancer，使其携带了多个参数
    //下面是使用redux调试插件用的
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//使用方法创建数据存储仓库
export default store;//暴露仓库