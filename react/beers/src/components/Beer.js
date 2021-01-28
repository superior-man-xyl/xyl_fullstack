import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class Beer extends Component{
    render(){
        return (
            <div>
                Beer
                <Link to="/">Main</Link>
                {/* 跳回首页 */}
            </div>
        )
    }
}