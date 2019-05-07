import React from 'react';
import { ROUTES } from './prop-types';
import Route from './route';

const linkStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
};

const Routes = ({ routes }) => (
  <div style={linkStyles}>
    { routes.map((route, index) => <Route route={route} key={index} />) }
  </div>
);

export default Routes;

Routes.propTypes = ROUTES;
