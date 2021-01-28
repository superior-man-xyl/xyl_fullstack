import React,{Component}from 'react';
import './CommentApp.css';
// 引入两个子组件,Comment就不用了，Comment属于CommentList,孙子辈
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component{
    constructor(){
        super();//把Component基础类（父类）它的构造函数执行一下
        this.state={
            comments:[{
                username:'Jerry',
                content:'Hello'
            },{
                username:'Tomy',
                content:'World'
            },{
                username:'Lucy',
                content:'Good'
            }]
        }
    }
//留下一个钩子函数
    handleSubmitComment(comment){
        // console.log(comment);
        this.setState({
            comments:[...this.state.comments,comment]//更新下评论
        })
    }

    render(){
        return(
            <div>
                <div className="wrapper">
                    <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
                </div>
                
            </div>
        )
    }
}