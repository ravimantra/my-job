import { actionType } from '../../constants/constants'

const getAllJobs = (state = {}, action) => {
  const { type, data = {} } = action;
  const {
    GET_ALL_JOBS_REQUEST,
    GET_ALL_JOBS_SUCCESS,
    GET_ALL_JOBS_FAILURE
  } = actionType;
  switch (type) {
    case GET_ALL_JOBS_REQUEST:
      return state;
    case GET_ALL_JOBS_SUCCESS:
      return {
        allJobs: data.allJobs
      };
    case GET_ALL_JOBS_FAILURE:
      return data;
    default:
      return state;
  }
};

export default getAllJobs;