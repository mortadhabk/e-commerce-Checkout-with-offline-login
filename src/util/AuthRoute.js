import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthRoute({ component: Component, ...rest }) {
  const token = useSelector((state) => state.Auth.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
