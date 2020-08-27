import React from 'react';
import {
  Route
} from 'react-router-dom';

const CustomRoute = ({ component: RouteComponent }) => (
  <Route
    render={(props) => {
      return (
        <RouteComponent {...props} />
      );
    }
    }
  />
);

export default CustomRoute;
