import { Route,Switch,Redirect,Link } from 'react-router-dom'; 
import './App.css';
import Detail from './pages/Detail';
import './assets/reset.min.css';
import './assets/common.css'

const Home =() => {
  return (
    <div>
      Home
    </div>
  )
}

function App() {
  return (
    <>
    <Link to="/detail/13">去商品详情页</Link>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </>
  );
}

export default App;
