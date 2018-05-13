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

            <div className="flex-grid">
              <div className="col">
                Schema-driven development with GraphQL and React-Apollo
                <video
                  controls
                  width="460"
                  src="https://s3-us-west-2.amazonaws.com/amiekuttruff.com/GraphQL.mp4"
                  poster="https://s3-us-west-2.amazonaws.com/amiekuttruff.com/public/img/GraphQLPoster.jpg">
                </video>
              </div>
              <div className="col">
                Clojure/West 2015
                <a href="https://youtu.be/SOIhncWcCjA" target="clojureWest">
                  <img src="img/ClojureWestPoster.jpg"
                    height="225px"
                    width="460"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


