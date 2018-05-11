import React, { Component } from 'react';
import SideBar from './sidebar';

export default class Talks extends Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <SideBar/>
        <div>Talks!</div>
      </div>
    )
  }
}


