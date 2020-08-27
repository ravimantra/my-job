import actionMethod from '../../actions/actionMethods';
import { actionType } from '../../constants/constants';

const {
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_FAILURE
} = actionType;

const deleteJobAction = (payload = {}) => (dispatch) => {
  return actionMethod(
    dispatch,
    `http://localhost:9000/job/${payload.id}`,
    'DELETE',
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAILURE,
    payload
  );
};

export default deleteJobAction;