import { actionType } from '../../constants/constants'

const addNewJob = (state = {}, action) => {
  const { type, data = {} } = action;
  const {
    ADD_NEW_JOB_REQUEST,
    ADD_NEW_JOB_SUCCESS,
    ADD_NEW_JOB_FAILURE
  } = actionType;
  switch (type) {
    case ADD_NEW_JOB_REQUEST:
      return {
        ...state,
        status: ''
      };
    case ADD_NEW_JOB_SUCCESS:
      return data;
    case ADD_NEW_JOB_FAILURE:
      return data;
    default:
      return state;
  }
};

export default addNewJob;