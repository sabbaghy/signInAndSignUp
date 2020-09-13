import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import UserContext from '../context/user';

const DashboardPage = () => {
  const { user } = useContext(UserContext);

  return !user ? (
    <Redirect to="sign-in-and-sign-up" />
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <h1>Welcome {user.displayName}!</h1>
    </div>
  );
};

export default DashboardPage;
