import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Summary from "../components/Summary";
import Home from "../components/Home";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/todo" component={() => {}} exact={true} />
        <Route path="/summary" component={Summary} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
