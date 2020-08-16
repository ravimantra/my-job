import loginActionMethods from '../../actions/loginActionMethods';

const loginAction = (payload = {}, cb) => () => {
  return loginActionMethods(
    'http://localhost:9000/user/login',
    'POST',
    payload,
    cb
  );
};

export default loginAction;