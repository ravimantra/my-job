import axios from 'axios';

const loginActionMethod = (url, method, payload, cb) => {
  return axios({
    method: method,
    url: url,
    data: payload
  })
    .then((response) => {
      const { data = {}, headers } = response;
      document.cookie = headers['auth-token'];
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