import React, { useState } from 'react';
import { connect } from 'react-redux';
import loginAction from './loginAction';

const Login = ({
  login,
  history
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitJob = () => {
    login({ email, password }, (res)  => {
      if (res.token) {
        document.cookie = res.token;
        history.push('/dashboard');
      } else {
        // TODO
      }
    })
  }
  return (
    <div id="login">
      <p>Login</p>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={submitJob}
        >
          Login
        </button>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  login: (payload, cb) => {
    dispatch(loginAction(payload, cb))
  }
})

export default connect(null, mapDispatchToProps)(Login);