import React, { Component } from 'react';
import SideBar from './sidebar';

export default class Music extends Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <SideBar/>
        <div className="content pure-u-1 pure-u-md-3-4">
          <h1 className="resume-subhead">Music</h1>
          <div className="description">
            <ul>
              <li>Classical violinist available for orchestra or chamber ensemble work</li>
              <li><a href="mailto:amie.kuttruff@gmail.com">Email</a> for more information</li>
            </ul>
          </div>
          <div className="title"><img src="img/violin.jpg" width="100%"/></div>
        </div>
      </div>
    );
  }
}