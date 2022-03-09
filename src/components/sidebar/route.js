import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from './prop-types';

const Route = ({ route }) => {
  const { link, title } = route;
  return (
    <li className="route">
      <Link to={link} className="anchor-styles">{ title }</Link>
    </li>
  );
};

export default Route;

Route.propTypes = ROUTE;
