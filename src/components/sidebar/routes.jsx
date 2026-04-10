import React from 'react';
import { ROUTES } from './prop-types';
import Route from './route';

const Routes = ({ routes }) => (
  <div className="routes">
    { routes.map((route, index) => <Route route={route} key={index} />) }
  </div>
);

export default Routes;

Routes.propTypes = ROUTES;
