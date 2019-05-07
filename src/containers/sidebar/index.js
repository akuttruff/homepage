import React from 'react';
import SocialLinks from '../../components/sidebar/social-links';
import Routes from '../../components/sidebar/routes';
import { routes, socialLinks } from '../../data';

const Sidebar = () => (
  <div className="sidebar">
    <header className="header">
      <h1 className="name">Amie Kuttruff </h1>
      <h2 className="bio">Software engineer, violinist.</h2>
      <Routes routes={routes} />
      <SocialLinks socialLinks={socialLinks} />
    </header>
  </div>
);

export default Sidebar;
