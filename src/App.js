/* eslint-disable no-useless-concat */
import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch, BrowserRouter as Router,
  Route, Redirect
} from "react-router-dom";
import {
  Container, Row
} from 'react-bootstrap';
import { createBrowserHistory } from 'history'
import { store } from './store/configureStore';
import getRoutes, { allRoutes } from './routes/index';
import Auth from './components/Auth/auth';
import './App.scss';
import Header from './components/Header/header';

const history = createBrowserHistory();
const allValidPath = allRoutes.map(route => route.path);

function redirectPath () {
  if (!document.cookie.match('(^|;)\\s*' + 'auth-token' + '\\s*=\\s*([^;]+)')?.pop()) {
    return '/';
  } else if (document.cookie.match('(^|;)\\s*' + 'auth-token' + '\\s*=\\s*([^;]+)')?.pop() && !allValidPath.includes(history.location.pathname)) {
    return '/dashboard';
  }
  return history.location.pathname;
};

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Container>
          <Row>
            {document.cookie.match('(^|;)\\s*' + 'auth-token' + '\\s*=\\s*([^;]+)')?.pop() ? <Header /> : null}
          </Row>
          <Row className="app-container">
            <Route exact path="/" component={Auth} />
            {getRoutes()}
            <Route render={() => <Redirect to={{pathname: redirectPath()}} />} />
         </Row>
        </Container>
      </Switch>
    </Router>
  </Provider>
)

export default App;
