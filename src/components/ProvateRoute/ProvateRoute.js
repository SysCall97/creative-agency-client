import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProvateRoute = ({ children, ...rest }) => {
  const loggedinUser = JSON.parse(sessionStorage.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedinUser.isLoggedIn? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default ProvateRoute;