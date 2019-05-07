import React from 'react';
import { SOCIAL_LINK } from './prop-types';

const SocialLink = ({ link }) => {
  const { url, iconClass } = link;
  return (
    <li className="nav-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <i className={iconClass} />
      </a>
    </li>
  );
};

export default SocialLink;

SocialLink.propTypes = SOCIAL_LINK;
