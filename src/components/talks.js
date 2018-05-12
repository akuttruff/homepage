import React, { Component } from 'react';
import SideBar from './sidebar';

export default class Talks extends Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <SideBar/>
        <div className="content pure-u-1 pure-u-md-3-4">
          <div className="resume">
            <h1 className="resume-subhead">Talks</h1>

            <div style={{}}>
              <video
                controls
                src="https://s3-us-west-2.amazonaws.com/amiekuttruff.com/GraphQL.mp4"
                poster="https://s3-us-west-2.amazonaws.com/amiekuttruff.com/public/img/GraphQLPoster.jpg"
                width="100%">
              </video>
            </div>
            <div>
              <iframe
                width="620"
                height="360"
                src="https://www.youtube.com/embed/SOIhncWcCjA"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


