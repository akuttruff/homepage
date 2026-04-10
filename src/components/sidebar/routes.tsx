import React from 'react';
import Route, { RouteType } from './route';

export interface RoutesType {
  routes: RouteType[];
}

const Routes = ({ routes }: RoutesType) => (
  <div className="routes">
    {routes.map((route, index) => <Route route={route} key={index} />)}
  </div>
);

export default Routes;
