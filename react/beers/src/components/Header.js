import React, { Component } from 'react';
import PropTypes from 'prop-types';// prop 检测工具 如果主组件没有传参就报错
import { Link } from 'react-router-dom';

export default class Header extends  Component {
  static propTypes = {
    siteName: PropTypes.string.isRequired//写在render外  这里限定string
  }
  render() {
    // console.log(this.props)
    return (
      <h1>
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    )
  }
}
