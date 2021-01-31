import loginActionMethods from '../../actions/loginActionMethods';

const authAction = (payload = {}, cb) => () => {
  const { name } = payload;
  const URL = payload.hasOwnProperty('name') ? 'http://localhost:9000/user/register' : 'http://localhost:9000/user/login'; 
  return loginActionMethods(
    URL,
    'POST',
    payload,
    cb
  );
};

export default authAction;