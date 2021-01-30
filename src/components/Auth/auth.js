import { propTypes } from 'react-bootstrap/esm/Image';
import React, { useState } from 'react';
import Login from './login';
import Register from './register';

const auth = () => {
  const [loginScreen, setLoginScreen] = useState(true);
  const setScreen = (isLogin) => setLoginScreen(isLogin);
  return (
    <div>
      {loginScreen ? <Login setScreen={setScreen} /> : <Register setScreen={setScreen} />}
    </div>
  )
}

export default auth