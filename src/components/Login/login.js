import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card, Button, Form, Col, Container, Row
} from 'react-bootstrap';
import loginAction from './loginAction';

const Login = ({
  login,
  history
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const submitJob = () => {
    setErrorMsg('');
    login({ email, password }, (res)  => {
      const { success, token, message } = res;
      if (success && token) {
        document.cookie = res.token;
        history.push('/dashboard');
      } else {
        setErrorMsg(message);
      }
    })
  }
  return (
    <Container className="my-auto">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Card.Text>
              <Form>
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
              </Form>
              {errorMsg ? <p>{errorMsg}</p> : ''}
              </Card.Text>
              <Button variant="primary" onClick={submitJob}>Login</Button>
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

export default connect(null, mapDispatchToProps)(Login);