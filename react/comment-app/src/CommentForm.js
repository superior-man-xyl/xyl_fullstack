import React,{Component} from 'react';//{Component} es6的解构
import './CommentForm.css'; //就像wxss

export default class CommentForm extends Component{
    render(){
        //JSX 就像wxml，是会当成js来执行的
        return (
            //这里用className而不是class
            <div className="comment-input">
          <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
              <input type="text"/>
            </div>
          </div>
          <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
              <textarea/>
            </div>
          </div>
          <div className="comment-field-button">
            <button>发布</button>
          </div>
      </div>
        )
    }
}