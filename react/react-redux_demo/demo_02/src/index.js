import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux'//提供器，使用其包裹，内部就可以使用store的值
import store from './store'

const App=(
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(
    App,
  document.getElementById('root')
);