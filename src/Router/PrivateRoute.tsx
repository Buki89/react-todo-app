import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { State } from "../store/types";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  rest: Array<string>;
  component: React.ElementType;
}

// TODO: use route enum
const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state: State) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
