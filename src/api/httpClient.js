/* eslint-disable no-useless-concat */
import axios from 'axios';

const httpService = (method, url, payload) => {
  return axios({
    headers: { 'auth-token': document.cookie.match('(^|;)\\s*' + 'auth-token' + '\\s*=\\s*([^;]+)')?.pop() || '' },
    method: method,
    url: url,
    data: payload
  })
  .catch(err => Promise.resolve(err.response))
}

export {
  httpService
}