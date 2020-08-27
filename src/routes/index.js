import React from 'react';
import Dashboard from '../components/Dashboard/dashboard';
import { Route, Redirect } from "react-router-dom";

const allRoutes = [
  {
    path: '/dashboard',
    component: Dashboard
  }
];

const SecuredRoute = (props) => (
  <Route
    path={props.path}
    render={data => document.cookie ? <props.component {...data}></props.component> : <Redirect to={{ pathname: '/' }} />}
    >
  </Route>
)

const getRoutes = () => 
  allRoutes.map(route => (
    <SecuredRoute
      key={route.path}
      path={route.path}
      component={route.component}
    />
  ))

export default getRoutes;