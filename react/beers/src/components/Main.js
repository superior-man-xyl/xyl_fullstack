import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//引入组件
import Header from './Header';
import Item from './Item';
import Loader from './Loader';
import List from './List'

export default class Main extends Component{
    constructor() {
        super()
        this.state = {
          isLoading: true
        }
      }

    render(){
        // return (
        //     <div>
        //         Main
        //         {/* 小程序里面有a标签吗？没
        //         怎么实现跳转呢？
        //         react 使用Link标签来代替a */}
        //         <Link to="/beer">Beer</Link>
        //     </div>
        // )
        return (
            <div>
                {/* 为子组件传参 */}
                <Header siteName="Beer me!" />
                <Loader />
                <List />
                <Item />
                {/* 首页  组件化 */}
            </div>
        )
    }
}