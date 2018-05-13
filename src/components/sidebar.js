import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';
import FaInstagram from 'react-icons/lib/fa/instagram';

const navListStyles = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  textAlign: 'center',
};

const linkStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px'
};

const iconStyles = {
  ':hover': {
    color: '#3d92c9',
    textDecoration: 'none'
  }
};

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header">
          <h1 className="name">Amie Kuttruff </h1>
          <h2 className="bio">Software engineer, violinist.</h2>
          <div style={linkStyles}>
            <li style={{ listStyleType: 'none', padding: '5px' }}>
              <Link to="/work" className="anchor-styles">Work</Link>
            </li>
            <li style={{ listStyleType: 'none', padding: '5px' }}>
              <Link to="/talks" className="anchor-styles">Talks</Link>
            </li>
            <li style={{ listStyleType: 'none', padding: '5px' }}>
              <Link to="/music" className="anchor-styles">Music</Link>
            </li>
          </div>
          <nav>
            <ul style={navListStyles}>
              <li className="nav-icon">
                <a href="http://github.com/akuttruff" target="_blank">
                  <FaGithub fontSize="40px" color="white"  style={iconStyles}/>
                </a>
              </li>
              <li className="nav-icon">
                <a href="http://twitter.com/amiekuttruff" target="_blank">
                  <FaTwitter fontSize="40px" color="white" className="ionicon"/>
                </a>
              </li>
              <li className="nav-icon">
                <a href="http://instagram.com/akuttruff" target="_blank">
                  <FaInstagram fontSize="40px" color="white" className="ionicon"/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}