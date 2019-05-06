import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Route = ({ route }) => {
    const { link, title } = route;
    return (
      <li style={{ listStyleType: 'none', padding: '5px' }}>
        <Link to={ link } className="anchor-styles">{ title }</Link>
      </li>
    );
};

export default Route;

Route.propTypes = {
  route: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
