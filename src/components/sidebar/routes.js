import React from 'react';
import PropTypes from 'prop-types';
import Route from './route';

const linkStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px'
};

const Routes = ({ routes }) => {
  return (
    <div style={linkStyles}>
      { routes.map(route => {
        return <Route route={route}/>
      }) }
    </div>
  );
};

export default Routes;

Routes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
