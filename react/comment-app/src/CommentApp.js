// 做一个应用的根组件
import React from 'react';
//css 是分组件来写的
import './CommentApp.css';//webpack 一切资源皆可打包
import CommentForm from './CommentForm.js';//引入组件，就像json
import CommentList from './CommentList.js';

class CommentApp extends React.Component{//通过继承快速创建类
    constructor(){
        super()
        this.state={
            name:'CommentApp'
        }
    }
    //至少要实现的方法
    render(){//负责 JSX模板template wxml
        return (//JSX react template    jsx意思是xml in js
            // html也叫XML 用于网页标签的XML叫HTML
            // React中有个JSX来放模板
            <div className="wrapper">
                {this.state.name}
                <CommentForm/>
                <CommentList/>
            </div>
        )

    }
}

export default CommentApp;//向外输出一下 挂载到root dom 上的react的区域