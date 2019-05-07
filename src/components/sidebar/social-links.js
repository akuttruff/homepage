import React from 'react';
import { SOCIAL_LINKS } from './prop-types';
import SocialLink from './social-link';

const navListStyles = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  textAlign: 'center',
  fontSize: '50px',
};

const SocialLinks = ({ socialLinks }) => (
  <nav>
    <ul style={navListStyles}>
      { socialLinks.map((link, index) => <SocialLink link={link} key={index} />) }
    </ul>
  </nav>
);

export default SocialLinks;

SocialLinks.propTypes = SOCIAL_LINKS;
