import React,{Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import Monday from './pages/monday';
import Tuesday from './pages/tuesday';
import Thursday from './pages/thursday';
import Wednesday from './pages/wednesday';
import Friday from './pages/friday';
import Saturday from './pages/saturday';
import Sunday from './pages/sunday';
import './App.css';
import { Menu } from 'antd';
import 'antd/dist/antd.css'//引入antdcss样式，才能使UI组件正常显示
import InputText from './input'
import store from './store'

class App extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state=store.getState();
        this.handleClick=this.handleClick.bind(this);
        this.changeInputValue=this.changeInputValue.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    render() { 
        const week=[
            {path:'/monday',title:'星期一',exact:true,component:Monday,active:true},
            {path:'/tuesday',title:'星期二',exact:false,component:Tuesday,active:false},
            {path:'/wednesday',title:'星期三',exact:false,component:Wednesday,active:false},
            {path:'/thursday',title:'星期四',exact:false,component:Thursday,active:false},
            {path:'/friday',title:'星期五',exact:false,component:Friday,active:false},
            {path:'/saturday',title:'星期六',exact:false,component:Saturday,active:false},
            {path:'/sunday',title:'星期七',exact:false,component:Sunday,active:false}
            ]
        return(
            <Fragment>
                <InputText 
                handleClick={this.handleClick}
                changeInputValue={this.changeInputValue}
                handleChange={this.handleClick}
                />
                <div className="zero"></div>
                <Router>
                <div className="main">
                <div className="leftNav">
                    {
                    week.map((item,index)=>{
                        return (
                            <Menu.Item  key={index}><Link to={item.path}>{item.title}</Link></Menu.Item >
                        )
                    })
                    }
                </div>
                <div className="rightList">
                    {
                        week.map((item,index)=>{
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                            )
                        })
                    }
                </div>
                </div>
            </Router>
            </Fragment>
            
        )
    }
    changeInputValue(e){

    }
    handleChange(value){
        console.log(`selected ${value}`);
    }
    handleClick(){
        console.log("提交");
    }
}
 
export default App;