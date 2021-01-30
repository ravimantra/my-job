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
import getRoutes from './routes/index';
import Login from './components/Login/login';
import './App.scss';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Container>
          <Row className="app-container">
            <Route exact path="/" component={Login} />
            {getRoutes()}
            <Route render={document.cookie ? () => <Redirect to={{pathname: "/dashboard"}} /> : () => <Redirect to={{pathname: "/"}} />} />
         </Row>
        </Container>
      </Switch>
    </Router>
  </Provider>
)

export default App;
