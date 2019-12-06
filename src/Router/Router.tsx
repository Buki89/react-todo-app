import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SummaryPage from "../components/SummaryPage";
import HomePage from "../components/HomePage";
import InProgressPage from "../components/InProgressPage";
import EditPage from "../components/EditPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/progress" component={InProgressPage} />
      <Route path="/edit/:id" component={EditPage} />
      <Route path="/summary" component={SummaryPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
