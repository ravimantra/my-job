import actionMethod from '../../actions/actionMethods';
import { actionType } from '../../constants/constants';

const {
  ADD_NEW_JOB_REQUEST,
  ADD_NEW_JOB_SUCCESS,
  ADD_NEW_JOB_FAILURE
} = actionType;

const addNewJobAction = (payload = {}) => (dispatch) => {
  return actionMethod(
    dispatch,
    'http://localhost:9000/',
    'POST',
    ADD_NEW_JOB_REQUEST,
    ADD_NEW_JOB_SUCCESS,
    ADD_NEW_JOB_FAILURE,
    payload
  );
};

export default addNewJobAction;