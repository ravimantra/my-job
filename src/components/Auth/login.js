import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
  Card, Button, Form, Alert,
  Col, Container, Row
} from 'react-bootstrap';
import authAction from './authAction';

const Login = ({ login, setScreen }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onHandleLogin = () => {
    setErrorMsg('');
    login({ email, password }, (res)  => {
      const { success, message } = res;
      if (success) {
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
              {errorMsg ? <Alert variant="danger"> {errorMsg}</Alert> : ''}
              <Card.Text>
              <Form>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
              </Card.Text>
              <Row>
                <Col sm={4}>
                  <Button variant="primary" onClick={onHandleLogin}>Login</Button>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className="d-flex justify-content-end">
                  <Alert.Link onClick={() => setScreen(false)} href="javascript:void(0)">Sign up</Alert.Link>
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
    dispatch(authAction(payload, cb))
  }
})

export default connect(null, mapDispatchToProps)(Login);