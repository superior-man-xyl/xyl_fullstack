import React, { Component } from "react";
import connect from "../../utils/connect";
import Icon from "../iconSvg";
import "./index.css";
@connect
class Footer extends Component {
  state = {
    footerBarList: [
      { title: "首页", icon: "home", path: "/" },
      { title: "视频", icon: "video", path: "/video" },
      { title: "微头条", icon: "comment", path: "/headline" },
      { title: "我的", icon: "account", path: "/account" }
    ],
    activeIndex:0,
  };

  checkBar(index){
      this.setState({
          activeIndex:index
      })
  }
  
  render() {
    // const {state: {user: {footerBarList}}} = this.props
    return (
      <div className="footer">
        <ul>
          {this.state.footerBarList.map((item, index) => {
            return (
              <li key={index+item} className={(this.state.activeIndex===index)?"item active":"item"} onClick={this.checkBar.bind(this,index)}>
                <Icon iconName={item.icon} className="icons"/>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Footer;
