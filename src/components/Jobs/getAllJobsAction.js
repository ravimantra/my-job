import actionMethod from '../../actions/actionMethods';
import { actionType } from '../../constants/constants';

const {
  GET_ALL_JOBS_REQUEST,
  GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE
} = actionType;

const getAllJobsAction = () => (dispatch) => {
  return actionMethod(dispatch, 'http://localhost:9000/job',
  'GET', GET_ALL_JOBS_REQUEST, GET_ALL_JOBS_SUCCESS,
  GET_ALL_JOBS_FAILURE, {});
};

export default getAllJobsAction;