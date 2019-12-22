import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  rest: Array<string>;
  component: React.ElementType;
}

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

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
