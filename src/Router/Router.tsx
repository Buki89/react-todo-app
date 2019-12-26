import React from "react";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "../Router/PrivateRoute";
import Loading from "../components/Loading";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

interface AppRouterProps {}

export const history = createBrowserHistory();

const AppRouter = (props: AppRouterProps) => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={LoginPage} exact={true} />
      <PrivateRoute path='/home' component={HomePage} />
      <Route path='/loading' component={Loading} />
    </Switch>
  </Router>
);

export default AppRouter;
