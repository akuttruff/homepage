import React from 'react';
import PropTypes from 'prop-types';
import SocialLink from './social-link';

const navListStyles = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  textAlign: 'center',
  fontSize: '50px',
};

const SocialLinks = ({ socialLinks }) => {
  return (
    <nav>
      <ul style={navListStyles}>
        { socialLinks.map(link => <SocialLink link={link} />) }
      </ul>
    </nav>
  )
};

export default SocialLinks;

SocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
