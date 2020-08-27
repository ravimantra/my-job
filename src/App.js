import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch, BrowserRouter as Router,
  Route, Redirect
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import { store } from './store/configureStore';
import getRoutes from './routes/index';
import Login from './components/Login/login';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        {getRoutes()}
        <Route render={document.cookie ? () => <Redirect to={{pathname: "/dashboard"}} /> : () => <Redirect to={{pathname: "/"}} />} />
      </Switch>
    </Router>
  </Provider>
)

export default App;
