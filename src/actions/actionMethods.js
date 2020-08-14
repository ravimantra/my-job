import { httpService } from '../api/httpClient';

const actionMethod = (dispatch, url, method, requestType, successType, failureType, payload) => {
  dispatch({ type: requestType, payload });
  httpService(method, url, payload)
    .then((response) => {
      const { data = {} } = response;
      return dispatch({ type: successType, data });
    })
    .catch((error) => {
      return dispatch({ type: failureType, error });
    })
  };


export default actionMethod;