import { combineReducers } from 'redux';
import getAllJobsReducer from './components/Jobs/getAllJobsReducer';
import addNewJobReducer from './components/Jobs/addNewJobReducer';

export default combineReducers({
  getAllJobsReducer,
  addNewJobReducer
})