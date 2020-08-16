import React from 'react';
import Jobs from './components/Jobs/jobs';
import Login from './components/Login/login';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <Jobs />
  </Provider>
)

export default App;