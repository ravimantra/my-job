import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card, Button, Form, Alert,
  Col, Container, Row
} from 'react-bootstrap';
import authAction from './authAction';

const Register = ({ register, history, setScreen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const onHandleRegister = () => {
    setErrorMsg('');
    if(password != repeatPassword) {
      setErrorMsg('Kindly enter same password');
    }
    register({ name, email, password }, (res)  => {
      const { success, message } = res;
      if (success) {
        document.cookie = res.token;
        history.push('/login');
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
            <Card.Header>Register</Card.Header>
            <Card.Body>
              {errorMsg ? <Alert variant="danger"> {errorMsg}</Alert> : ''}
              <Card.Text>
              <Form>
                <Form.Group>
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
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
                <Form.Group>
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
                  <Alert.Link onClick={() => setScreen(true)} href="javascript:void(0)">Login</Alert.Link>
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
  register: (payload, cb) => {
    dispatch(authAction(payload, cb))
  }
})

export default connect(null, mapDispatchToProps)(Register);