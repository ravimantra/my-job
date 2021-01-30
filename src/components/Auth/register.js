import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card, Button, Form, Alert,
  Col, Container, Row
} from 'react-bootstrap';
import loginAction from './registerAction';

const Register = ({ login, history, setScreen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onHandleRegister = () => {
    if(password != repeatPassword) {
      setErrorMsg('Kindly enter same password');
    }
    // setErrorMsg('');
    // login({ email, password }, (res)  => {
    //   const { success, token, message } = res;
    //   if (success && token) {
    //     document.cookie = res.token;
    //     history.push('/dashboard');
    //   } else {
    //     setErrorMsg(message);
    //   }
    // })
  }
  function onHandleLogin () { setScreen(true) }
  return (
    <Container className="my-auto">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>Register</Card.Header>
            <Card.Body>
              {errorMsg ? <Alert variant="danger"> {errorMsg}</Alert> : ''}
              <Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Repeat assword</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
              </Card.Text>
              <Row>
                <Col sm={4}>
                  <Button variant="primary" onClick={onHandleRegister}>Register</Button>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className="d-flex justify-content-end">
                  <Alert.Link onClick={onHandleLogin} href="javascript:void(0)">Login</Alert.Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>  
  )
}

export const mapDispatchToProps = dispatch => ({
  login: (payload, cb) => {
    dispatch(loginAction(payload, cb))
  }
})

export default connect(null, mapDispatchToProps)(Register);