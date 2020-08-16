import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Dashboard from './components/Dashboard/dashboard';

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
)

export default App;
