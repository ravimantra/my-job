import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
  Card, Button,
  Row, Col,
  FormControl, InputGroup
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import addNewJobAction from './addNewJobAction';

const AddNewJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const statusCode = useSelector(state => state.singleJobReducer.status || '');
  const history = useHistory();

  useEffect (() => {
    if (statusCode === 200) {
      history.push('/dashboard');
    }
  }, [statusCode]);

  const submitJob = () => {
    dispatch(addNewJobAction({ title, location }));
  }

  return (
    <Card className="w100">
      <Card.Header>
        <Row>
          <Col xs={12} md={12}>
            Add new job
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputGroup>
        <Button
          variant="secondary"
          onClick={() => history.push('/dashboard')}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={submitJob}
        >
          Add
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AddNewJob;