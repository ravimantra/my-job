import React from 'react';
import { Nav, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import logoutAction from '../Auth/logoutAction';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  function onHandleLogout () {
    dispatch(logoutAction({}, (res) => {
      const { success } = res;
      if (success) {
        history.push('/');
        // TODO: replace with loader
        window.location.reload();
      }
    }))
  }
  return (
    <div id="header">
      <Nav>
        <Button onClick={onHandleLogout}>Logout</Button>
      </Nav>
    </div>
  )
};


export default Header;