import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Card } from 'react-bootstrap';
import getAllJobsAction from './getAllJobsAction';
import addNewJobAction from './addNewJobAction';
import lang from '../../localLang';

const Jobs = ({
  getAllJobs,
  allJobs = [],
  addNewJob,
  statusCode
}) => {
  const { JOB_TITLE, JOB_LOCATION } = lang;
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  useEffect (() => {
    getAllJobs();
  }, []);
  useEffect (() => {
    if (statusCode === 200) {
      getAllJobs();
    }
  }, [statusCode]);
  const submitJob = () => addNewJob({ title, location });
  return (
    <React.Fragment>
      <button
        onClick={() => document.cookie = ''}
      >
        logout
      </button>
      <Card>
        <Card.Header>All Jobs</Card.Header>
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
                        <button>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Add New Jobs</Card.Header>
          <Card.Body>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
            <button
              onClick={submitJob}
            >
              Add
            </button>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export const mapStateToProps = state => {
  return {
    allJobs: state.getAllJobsReducer.allJobs || [],
    statusCode: state.addNewJobReducer.status
  }
}
export const mapDispatchToProps = dispatch => ({
  getAllJobs: () => {
    dispatch(getAllJobsAction())
  },
  addNewJob: (payload) => {
    dispatch(addNewJobAction(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);