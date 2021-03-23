import React, { Component } from "react";
import Icon from "../iconSvg";
import "./index.css";
import { withRouter } from "react-router-dom";
@withRouter
// input标签的readOnly，表示只读，不能输入内容
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={require("../../assets/logo.png")} alt="" />
        </div>
        <div className="search">
          <Icon iconName="2fangdajing" className="search-icon" />
          <input type="text" placeholder="请输入要搜索的内容" readOnly onClick={(e)=>{
              this.props.history.slideState = 'left'
              this.props.history.push(`/search`)
          }}/>
        </div>
      </div>
    );
  }
}

export default Home;
