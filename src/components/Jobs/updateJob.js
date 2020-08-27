import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
  Card, Button,
  Row, Col,
  FormControl, InputGroup
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import updateJobAction from './updateJobAction';

const UpdateJob = () => {
  const dispatch = useDispatch();
  const selectedJob = useSelector(state => state.singleJobReducer.selectedJob || '');
  const statusCode = useSelector(state => state.singleJobReducer.status || '');
  const history = useHistory();
  const [title, setTitle] = useState(selectedJob.title || '');
  const [location, setLocation] = useState(selectedJob.location || '');

  useEffect (() => {
    if (statusCode === 200) {
      history.push('/dashboard');
    }
  }, [statusCode]);

  const updateJob = () => {
    dispatch(updateJobAction({ title, location, id: selectedJob._id }));
  }

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={12} md={12}>
            Update
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
          onClick={updateJob}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UpdateJob;