import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { State } from "../store/types";
import { RouteType } from "../store/types";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  rest: Array<string>;
  component: React.ElementType;
}

const PrivateRoute = ({
  isAuthenticated,
  component: Component
}: PrivateRouteProps) => (
  <Route
    component={props =>
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to={RouteType.login} />
      )
    }
  />
);

const mapStateToProps = (state: State) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
