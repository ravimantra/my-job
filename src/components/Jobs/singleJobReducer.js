import { actionType } from '../../constants/constants'

const addNewJob = (state = {}, action) => {
  const { type, data = {} } = action;
  console.log(data);
  const {
    ADD_NEW_JOB_REQUEST,
    ADD_NEW_JOB_SUCCESS,
    ADD_NEW_JOB_FAILURE,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAILURE,
    UPDATE_JOB_REQUEST,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAILURE,
    SET_SINGLE_JOB,
    GET_SELECTED_JOB
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
    case DELETE_JOB_REQUEST:
      return {
        ...state,
        status: ''
      };
    case DELETE_JOB_SUCCESS:
      return data;
    case DELETE_JOB_FAILURE:
      return data;
    case UPDATE_JOB_REQUEST:
      return {
        ...state,
        status: '',
        selectedJob: state.selectedJob
      };
    case UPDATE_JOB_SUCCESS:
      return data;
    case UPDATE_JOB_FAILURE:
      return {
        ...state,
        data,
        selectedJob: state.selectedJob
      };
    case SET_SINGLE_JOB:
      return {
        ...state,
        status: ''
      };
    case GET_SELECTED_JOB:
      return {
        ...state,
      selectedJob: data,
      status: ''
      }
    default:
      return state;
  }
};

export default addNewJob;