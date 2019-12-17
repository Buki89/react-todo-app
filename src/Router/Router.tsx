import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
//import LoginPage from "../components/LoginPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/home" component={HomePage} exact={true} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
