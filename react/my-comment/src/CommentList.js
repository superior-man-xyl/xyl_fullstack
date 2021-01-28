import React,{Component}from 'react';
import './CommentList.css';
// 为CommentList引入内容组件
import Comment from './Comment';

export default class CommentList extends Component{
    render(){
        return (
            <div>
                CommentList
                {/* 循环 小程序里是wx:for vue里学的  而react里没有指令 
                react是原汁原味的js   json array=>map html array*/}
                {
                    this.props.comments.map(comment=> <Comment comment={comment}/>)
                }
               
            </div>
        )
    }
}