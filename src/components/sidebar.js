import React, { Component } from 'react';
import { Link } from "react-router-dom";

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

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header">
          <h1 className="name">Amie Kuttruff </h1>
          <h2 className="bio">Software engineer, violinist.</h2>
          {/*<h2 className="location">PDX, OR</h2>*/}
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
                  <i className="icon ion-social-github"/>
                </a>
              </li>
              <li className="nav-icon">
                <a href="http://twitter.com/amiekuttruff" target="_blank">
                  <i className="icon ion-social-twitter"/>
                </a>
              </li>
              <li className="nav-icon">
                <a href="http://instagram.com/akuttruff" target="_blank">
                  <i className="icon ion-social-instagram-outline"/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}