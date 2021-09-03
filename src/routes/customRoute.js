import React from 'react';
import {
  Route
} from 'react-router-dom';
import Header from '../components/Header/header';

const CustomRoute = ({ component: RouteComponent }) => (
  <Route
    render={(props) => {
      return (
        <div>
          <Header />
          <RouteComponent {...props} />
        </div>
      );
    }
    }
  />
);

export default CustomRoute;
