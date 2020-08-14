import axios from 'axios';

const httpService = (method, url, payload) => {
  return axios({
    method: method,
    url: url,
    data: payload
  })
  .catch(err => Promise.resolve(err.response))
}

export {
  httpService
}