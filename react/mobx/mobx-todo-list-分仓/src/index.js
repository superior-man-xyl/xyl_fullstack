import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import articlesStore from './stores/articlesStore';
import usersStore from './stores/usersStore'
import { HashRouter } from 'react-router-dom';

const stores = {
  articlesStore: articlesStore,//大的仓库可以分成很多间小部分
  usersStore:usersStore
} 

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
