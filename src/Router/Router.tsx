import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SummaryPage from "../components/SummaryPage";
import HomePage from "../components/HomePage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HomePage} exact={true} />
      <Route path='/todo' component={() => {}} exact={true} />
      <Route path='/summary' component={SummaryPage} exact={true} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
