import React, { Component } from "react";
import PropTypes from "prop-types";

class IconSvg extends Component {
  static propsTypes = {
    // classByName: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    clickSearch: PropTypes.func
  };
  state = {};
  render() {
    let { className, clickSearch, iconName } = this.props;
    return (
      <svg
        className={`icon ${className}`}
        aria-hidden="true"
        onClick={clickSearch}
      >
        <use xlinkHref={`#icon-${iconName}`}></use>
      </svg>
    );
  }
}

export default IconSvg;
