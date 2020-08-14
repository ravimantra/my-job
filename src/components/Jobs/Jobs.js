import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import getAllJobsAction from './getAllJobsAction';
import addNewJobAction from './addNewJobAction';
import lang from '../../localLang';

const Jobs = ({
  getAllJobs,
  allJobs,
  addNewJob
}) => {
  const { JOB_TITLE, JOB_LOCATION } = lang;
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  useEffect (() => {
    getAllJobs();
  }, [])
  const submitJob = () => addNewJob({ title, location })
  return (
    <div>
      <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>{JOB_TITLE}</th>
          <th>{JOB_LOCATION}</th>
        </tr>
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
            </tr>
          ))
        }
      </tbody>
    </table>
      <p>Add more</p>
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
    </div>
  )
}

export const mapStateToProps = state => {
  return {
    allJobs: state.getAllJobsReducer || []
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