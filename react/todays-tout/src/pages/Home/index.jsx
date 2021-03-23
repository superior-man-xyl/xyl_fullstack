import React, { Component } from "react";
import Swiper from "react-id-swiper";
import NavBar from "./navBar";
import Content from "./content";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="swiper">
          <Swiper slidesPerView={6} ref="top-bar-swiper">
            <Content />
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Home;
