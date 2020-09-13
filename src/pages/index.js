import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import UserContext from '../context/user';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return !!user ? <Redirect to="/dashboard" /> : <Redirect to="/sign-in-and-sign-up" />;
};

export default HomePage;