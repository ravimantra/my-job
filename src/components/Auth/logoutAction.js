import loginActionMethod from '../../actions/loginActionMethods';

const logoutAction = (payload, cb) => () => {
  return loginActionMethod('http://localhost:9000/user/logout',
  'GET', payload, cb);
};

export default logoutAction;