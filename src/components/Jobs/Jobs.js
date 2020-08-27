import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
  Table, Card, Button,
  Row, Col, Modal
} from 'react-bootstrap';
import getAllJobsAction from './getAllJobsAction';
import deleteJobAction from './deleteJobAction';
import lang from '../../localLang';
import { actionType } from '../../constants/constants';

const { SET_SINGLE_JOB, GET_SELECTED_JOB } = actionType;
const { JOB_TITLE, JOB_LOCATION } = lang;

const Jobs = () => {
  const [show, setShow] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const allJobs = useSelector(state => state.getAllJobsReducer.allJobs || []);
  const statusCode = useSelector(state => state.singleJobReducer.status || '')
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect (() => {
    dispatch(getAllJobsAction());
  }, []);

  useEffect (() => {
    if (statusCode === 200) {
      setShow(false);
      dispatch(getAllJobsAction());
    }
  }, [statusCode]);

  function onHandleDeleteJob (job) {
    setSelectedJob(job);
    setShow(true);
  }

  function onHandleAddNewJob () {
    dispatch({ type: SET_SINGLE_JOB });
    history.push('/add-job')
  }

  function onHandleEitJob (job) {
    dispatch({ type: GET_SELECTED_JOB, data: job });
    history.push('/edit-job')
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          <Row>
            <Col xs={12} md={8}>
              All Jobs
            </Col>
            <Col xs={6} md={4}>
              <Button
                onClick={onHandleAddNewJob}
              >
                Add new job
              </Button>
            </Col>
          </Row>
        </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                <th>#</th>
                <th>{JOB_TITLE}</th>
                <th>{JOB_LOCATION}</th>
                <th></th>
                <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  allJobs.length && allJobs.map((job, index) => (
                    <tr key={index}>
                      <td>
                        {index}
                      </td>
                      <td>
                        {job.title}
                      </td>
                      <td>
                        {job.location}
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={() => onHandleEitJob(job)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={() => onHandleDeleteJob(job)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this job?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => dispatch(deleteJobAction({ id: selectedJob._id }))}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default Jobs;