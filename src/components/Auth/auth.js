import { propTypes } from 'react-bootstrap/esm/Image';
import React, { useState } from 'react';
import Login from './login';
import Register from './register';

const Auth = () => {
  const [loginScreen, setLoginScreen] = useState(true);
  return loginScreen ? (
    <Login setScreen={(isLogin) => setLoginScreen(isLogin)} />
  ) : (
    <Register setScreen={(isLogin) => setLoginScreen(isLogin)} />
  )
}

export default Auth;
