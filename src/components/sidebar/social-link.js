import React from 'react';
import { SOCIAL_LINK } from './prop-types';

const SocialLink = ({ link }) => {
  const { url, icon } = link;

  return (
    <li className="nav-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </li>
  );
};

export default SocialLink;

SocialLink.propTypes = SOCIAL_LINK;
