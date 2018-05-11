import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header">
          <h1 className="name">Amie Kuttruff </h1>
          <h2 className="bio">Software engineer, violinist.</h2>
          <h2 className="location">PDX, OR</h2>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/work">Work</Link></li>
              <li className="nav-item"><Link to="/talks">Talks</Link></li>
              <li className="nav-item"><Link to="/music">Music</Link></li>
              <li className="nav-item">
                <a href="http://github.com/akuttruff" target="_blank"><i className="icon ion-social-github"></i></a>
              </li>
              <li className="nav-item">
                <a href="http://twitter.com/amiekuttruff" target="_blank"><i
                  className="icon ion-social-twitter"></i></a>
              </li>
              <li className="nav-item">
                <a href="http://instagram.com/akuttruff" target="_blank"><i
                  className="icon ion-social-instagram-outline"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}