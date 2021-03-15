import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 复制应用都是细分的，什么状态呀，UI呀
// 组件和数据都是分离的
import store from './store'//组件与数据流的模块化
//给我们的组件提供状态管理 Provider
import { Provider } from 'mobx-react'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.body)//第二个参数就是挂载点