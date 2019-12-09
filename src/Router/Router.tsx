import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SummaryPage from "../components/SummaryPage";
import HomePage from "../components/HomePage";
import InProgressPage from "../components/InProgressPage";
import EditPage from "../components/EditPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/home" component={HomePage} />
      <Route path="/progress" component={InProgressPage} />
      <Route path="/edit/:id" component={EditPage} />
      <Route path="/summary" component={SummaryPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
