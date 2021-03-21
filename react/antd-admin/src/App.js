import ReactDOM from 'react-dom';
import React from 'react'
//as  取别名
import { BrowserRouter as Router,Route,Switch,Redirect }from 'react-router-dom';
import Admin from './admin';
import Home from './pages/Home'
import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
   <Router>
     <Admin>
       <Switch>
         <Route path='/' component={Home} />
       </Switch>
     </Admin>
   </Router>
  );
}

export default App;
