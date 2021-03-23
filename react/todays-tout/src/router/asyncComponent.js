import { React, Component } from "react";
import NProgress from "nprogress";

export default loadComponent =>
  class asynComponent extends Component {
    state = {
      Component: null
    };

    async componentDidMount() {
      if (this.state.Component !== null) return;
      NProgress.start();
      try {
        const { default: Component } = await loadComponent();
        this.setState({ Component });
      } catch (err) {
        console.error(`Cannot load component in <AsyncComponent/>`);
        throw err;
      }

      NProgress.done();
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };