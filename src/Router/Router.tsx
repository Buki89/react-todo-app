import React from "react";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "../Router/PrivateRoute";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

// TODO: routes enum
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/home" component={HomePage} />
    </Switch>
  </Router>
);

export default AppRouter;
