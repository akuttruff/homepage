import React from 'react';
import { SOCIAL_LINKS } from './prop-types';
import SocialLink from './social-link';

const SocialLinks = ({ socialLinks }) => (
  <nav>
    <ul className="nav-list">
      { socialLinks.map((link, index) => <SocialLink link={link} key={index} />) }
    </ul>
  </nav>
);

export default SocialLinks;

SocialLinks.propTypes = SOCIAL_LINKS;
