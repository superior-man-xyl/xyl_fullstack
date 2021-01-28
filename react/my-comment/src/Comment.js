import React,{Component}from 'react';
import './Comment.css';

export default class Comment extends Component{
    render(){
        return(
            <div>
                
            {this.props.comment.username}:{this.props.comment.content}
            </div>
        )
    }
}