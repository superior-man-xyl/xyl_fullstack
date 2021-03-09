//作为整个项目的store文件，管理store
import { createStore } from 'redux'//引入createStore方法
import reducer from './reducer'//把reducer引入到store中,再创建store时，以参数的形式传递给store
const store = createStore(reducer,//下面是使用redux调试插件用的
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//使用方法创建数据存储仓库
export default store;//暴露仓库