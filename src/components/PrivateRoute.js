import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ authentication, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authentication ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
