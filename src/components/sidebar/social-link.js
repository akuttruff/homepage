import React from 'react';
import PropTypes from 'prop-types';

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

SocialLink.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
  }).isRequired,
};
