import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "nprogress/nprogress.css";
import Router from "./router";

import {BrowserRouter} from 'react-router-dom'
import store from "./store";
import './utils/iconfont'
import './utils/rem'
import './styles/base.css'

import ReactFastclick from "react-fastclick";

ReactFastclick(); // 解决IOS几点不生效问题
const App = (
  <Provider store={store}>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

serviceWorker.unregister();