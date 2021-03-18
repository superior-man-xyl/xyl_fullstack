import logo from './logo.svg';
import './App.css';
import { BrowserRouter,HashRouter } from "react-router-dom";
//SPA(单页应用)#/兼容性更好   
// src/ 下添加目录  有架构意义  例如/component   /pages  /api  /store /layout
import Frame from './layout/Frame';//   /layout  页面框架
import HookMovie from './pages/HookMovie'
import {Switch,Router} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Switch>
            <Router path="/" component={HookMovie}/>
        </Switch>
      </Frame>
    </BrowserRouter>
  );
}

export default App;
