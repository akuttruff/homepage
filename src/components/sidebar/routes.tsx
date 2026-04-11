import React from 'react';
import type { RouteType } from './route';
import Route from './route';

export interface RoutesType {
  routes: RouteType[];
}

const Routes = ({ routes }: RoutesType) => (
  <div className="routes">
    {routes.map((route, index) => <Route route={route} key={index} />)}
  </div>
);

export default Routes;
