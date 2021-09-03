/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
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
    <div id="header" className="w100">
      <Navbar>
        <Container>
          <Navbar.Brand>WorkTogether</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="javascript:void(0)" onClick={onHandleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};


export default Header;