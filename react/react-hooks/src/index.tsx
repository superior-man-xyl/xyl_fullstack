import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';

// import { HelloComponent } from './hello';
//AppRouter 使用路由接管 写到最外层。路由模块化成一个组件
import {AppRouter} from './router'//路由模块
ReactDOM.render(
    // <App />,
    <AppRouter />,
    document.getElementById('root')
);
