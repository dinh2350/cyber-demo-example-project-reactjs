import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routeList from "./configs/routes";
function App() {
  const renderRouteList = (routeList) => {
    return routeList.map(({ path, exact, Component }, index) => (
      <Route exact={exact} path={path} key={index}>
        <Component />
      </Route>
    ));
  };
  return (
    <div>
      <Router>
        <Switch>{renderRouteList(routeList)}</Switch>
      </Router>
    </div>
  );
}

export default App;
