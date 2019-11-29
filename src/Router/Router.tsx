import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SummaryPage from "../components/SummaryPage";
import HomePage from "../components/HomePage";
import InProgress from "../components/InProgress";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/inprogress" component={InProgress} />
      <Route path="/summary" component={SummaryPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
