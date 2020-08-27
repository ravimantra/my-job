import { combineReducers } from 'redux';
import getAllJobsReducer from './components/Jobs/getAllJobsReducer';
import singleJobReducer from './components/Jobs/singleJobReducer';

export default combineReducers({
  getAllJobsReducer,
  singleJobReducer
})