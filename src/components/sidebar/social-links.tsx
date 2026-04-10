import React from 'react';
import SocialLink, { SocialLinkType } from './social-link';

export interface SocialLinksType {
  socialLinks: SocialLinkType[];
}

const SocialLinks = ({ socialLinks }: SocialLinksType) => (
  <nav>
    <ul className="nav-list">
      {socialLinks.map((link, index) => <SocialLink link={link} key={index} />)}
    </ul>
  </nav>
);

export default SocialLinks;
