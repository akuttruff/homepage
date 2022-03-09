import React, { useState, useRef, useEffect } from 'react';
import SocialLinks from '../../components/sidebar/social-links';
import Routes from '../../components/sidebar/routes';
import { routes, socialLinks } from '../../data';

const DESKTOP_MIN_WIDTH = 913;

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>
);

const Hamburger = () => {
  const menuRef = useRef();
  const [isOpen, setMenuState] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (isOpen && !menuRef.current?.contains(event.target)) {
        setMenuState(false);
      }
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [isOpen]);

  const toggleMenuState = () => {
    if (isOpen) setMenuState(false);
    if (!isOpen) setMenuState(true);
  };

  return (
    <div
      ref={menuRef}
      className="hamburger"
      onClick={toggleMenuState}
      onKeyUp={toggleMenuState}
      role="button"
      tabIndex={0}
    >
      <h2 className="bio">Amie Kuttruff </h2>

      {isOpen ? <CloseIcon /> : <MenuIcon />}
      { isOpen ? (
        <div className="menu">
          <Routes routes={routes} />
          <SocialLinks socialLinks={socialLinks} />
        </div>
      ) : null }
    </div>
  );
};

const DesktopSidebar = () => (
  <div className="sidebar">
    <header className="header">
      <h1 className="name">Amie Kuttruff </h1>
      <h2 className="bio">Software engineer, violinist.</h2>
      <Routes routes={routes} />
      <SocialLinks socialLinks={socialLinks} />
    </header>
  </div>
);

const Sidebar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isDesktop = width >= DESKTOP_MIN_WIDTH;
  return isDesktop ? <DesktopSidebar /> : <Hamburger />;
};

export default Sidebar;
