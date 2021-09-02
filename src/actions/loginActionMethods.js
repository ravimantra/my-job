import axios from 'axios';

const loginActionMethod = (url, method, payload, cb) => {
  return axios({
    method: method,
    url: url,
    data: payload,
    withCredentials: true
  })
    .then((response) => {
      const { data = {} } = response;
      if (typeof cb === 'function') {
        cb(data);
      }
    })
    .catch((error) => {
      if (typeof cb === 'function') {
        cb(error);
      }
    })
  };


export default loginActionMethod;