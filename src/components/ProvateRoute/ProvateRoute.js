import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const ProvateRoute = ({ children, ...rest }) => {
  // const loggedinUser = JSON.parse(sessionStorage.user);
  const { user } = useContext(userContext);
  const [loggedinUser] = user;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedinUser.isLoggedIn ? (
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