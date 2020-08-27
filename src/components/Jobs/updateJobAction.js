import actionMethod from '../../actions/actionMethods';
import { actionType } from '../../constants/constants';

const {
  UPDATE_JOB_REQUEST,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE
} = actionType;

const updateJobAction = (payload = {}) => (dispatch) => {
  return actionMethod(
    dispatch,
    `http://localhost:9000/job/${payload.id}`,
    'PUT',
    UPDATE_JOB_REQUEST,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAILURE,
    payload
  );
};

export default updateJobAction;