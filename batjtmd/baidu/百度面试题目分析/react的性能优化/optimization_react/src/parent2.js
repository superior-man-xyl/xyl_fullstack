import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentInfo: [{ name: "哈哈哈" }],
    };
    this.changeParentInfo = this.changeParentInfo.bind(this);
  }

  changeParentInfo() {
    let temp = this.state.parentInfo;
    temp[0].name = "呵呵呵：" + new Date().getTime();
    this.setState({
      parentInfo: temp,
    });
    // this.childRef.updateChild();
  }

  render() {
    console.log("Parent Component render");
    return (
      <div>
        <p>{this.state.parentInfo[0].name}</p>
        <button onClick={this.changeParentInfo}>改变父组件state</button>
        <br />
        <Child ref={(Child)=>{this.childRef=Child}} parentInfo={this.state.parentInfo}></Child>
      </div>
    );
  }
}

export default Parent;
