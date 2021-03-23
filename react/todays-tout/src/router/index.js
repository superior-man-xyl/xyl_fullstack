import React, { Component } from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { routes, layoutRouterMap, noLayoutRouterMap } from "./config";
import Layout from "../App";

const renderRouteComponent = routes => routes.map((route, index) => {
  return <Route key={index + route} {...route} />;
});

const layoutRouter = renderRouteComponent(layoutRouterMap);
const noLayoutRouter = renderRouteComponent(noLayoutRouterMap);

const pageTransitionFn = status => {
  let obj = {};
  if (status === "left" || status === "top") {
    obj = {
      atEnter: { offset: 100, opacity: 0 },
      atLeave: { offset: -100, opacity: 0 },
      atActive: { offset: 0, opacity: 1 }
    };
  } else if (status === "right" || status === "bottom") {
    obj = {
      atEnter: { offset: -100, opacity: 0 },
      atLeave: { offset: 100, opacity: 0 },
      atActive: { offset: 0, opacity: 1 }
    };
  } else {
    obj = {
      atEnter: { offset: 0, opacity: 1 },
      atLeave: { offset: 0, opacity: 1 },
      atActive: { offset: 0, opacity: 1 }
    };
  }
  return obj;
};

const mapStyleFn = status => styles => {
  let obj = {};
  if (status === "left" || status === "right") {
    obj = {
      transform: `translateX(${styles.offset}%)`,
      opacity: styles.opacity
    };
  } else if (status === "top" || status === "bottom") {
    obj = {
      transform: `translateY(${styles.offset}%)`,
      opacity: styles.opacity
    };
  }
  return obj;
};

class Router extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0
        }}
      >
        <HashRouter>
          <Route
            render={({ location, history }) => {
              history.slideStatus =
                history.slideStatus ||
                (history.action === "POP" ? "right" : history.slideStatus);
              const pageTransitions = pageTransitionFn(history.slideStatus);
              const mapStyle = mapStyleFn(history.slideStatus);
              history.slideStatus = false;
              return (
                <div style={{ width: "100%", height: "100%" }}>
                  <AnimatedSwitch
                    {...pageTransitions}
                    runOnMount={location.pathname === "/"}
                    mapStyles={mapStyle}
                    className="animate-wrapper"
                  >
                    {noLayoutRouter}
                    <Route
                      render={props => {
                        return (
                          <Layout {...props}>
                            <Route
                              render={() => {
                                return (
                                  <Switch>
                                    {layoutRouter}
                                    <Redirect from="*" to="/404/" />
                                  </Switch>
                                );
                              }}
                            />
                          </Layout>
                        );
                      }}
                    />
                  </AnimatedSwitch>
                </div>
              );
            }}
          />
        </HashRouter>
      </div>
    );
  }
}

export default Router;