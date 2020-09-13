import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserContext from '../../context/user';

const AuthRoute = ({ component: Component, ...props }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...props}
      render={routeProps => (!!user ? <Component {...routeProps} /> : <Redirect to="/" />)}
    />
  );
};

export default AuthRoute;