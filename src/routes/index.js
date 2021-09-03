import React from 'react';
import Dashboard from '../components/Dashboard/dashboard';
import AddNewJob from '../components/Jobs/addNewJob';
import UpdateJob from '../components/Jobs/updateJob';
import { Route, Redirect } from "react-router-dom";

export const allRoutes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/add-job',
    component: AddNewJob
  },
  {
    path: '/edit-job',
    component: UpdateJob
  }
];

const SecuredRoute = (props) => (
  <Route
    path={props.path}
    exact
    render={data => document.cookie.match('(^|;)\\s*' + 'auth-token' + '\\s*=\\s*([^;]+)')?.pop() ? <props.component {...data}></props.component> : <Redirect to={{ pathname: '/' }} />}
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