import logo from './logo.svg';
import './App.css';
//引入antd
import {Button }from 'antd';//组件库
//css要单独引入,在app.css
import Login from './Login';
import Post from './Post';//新的页面 组件


function App() {
  return (
    <div className="App">
      {/* <Button type="primary">primary Button</Button> */}
      <Login />
      {/* <Post /> */}
    </div>
  );
}

export default App;
