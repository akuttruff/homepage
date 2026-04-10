import React from 'react';
import { Link } from 'react-router-dom';

export interface RouteType {
  link: string;
  title: string;
}

interface RouteProps {
  route: RouteType;
}

const Route = ({ route }: RouteProps) => {
  const { link, title } = route;
  return (
    <li className="route">
      <Link to={link} className="anchor-styles">{title}</Link>
    </li>
  );
};

export default Route;
