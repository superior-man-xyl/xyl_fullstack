import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import Home from './Home';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:"我的个人博客-1"},
                {cid:456,title:"我的个人博客-2"},
                {cid:789,title:"我的个人博客-3"}
            ]
         }
         //编程式重定向
         this.props.history.push("/Home/");
    }
    render() { 
        return (
            <div>
                {/* <Redirect to="/Home/" /> */}
                {/* 改成编程式重定向 */}
                <h2>JSPang.com</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={'/List/'+item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
               
              );
    }
}

export default Index;