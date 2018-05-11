import React, { Component } from 'react';
import SideBar from './sidebar';

export default class Resume extends Component {
  render() {
    return (
        <div id="layout" className="pure-g">
          <SideBar/>
          <div className="content pure-u-1 pure-u-md-3-4">
            <div className="resume">
              <h1 className="resume-subhead">Work</h1>
              <div className="title"><img src="img/renew.png" height="60px"/></div>
              <div className="title">
                <a href="https://renewfinancial.com/" target="_blank">RENEW FINANCIAL</a>
                <div className="time">(October 2017 - present)</div>
                Software Engineer II
              </div>
              <div className="description">
                <ul>
                  <li>Builds user interfaces that make renewable energy and energy-efficiency improvements accessible to homeowners</li>
                  <li>Writes clean, testable, modern JavaScript with React.js + Redux within a legacy AngularJS codebase</li>
                  <li>Ensures quality software by writing behavior-driven unit tests with Jasmine, Karma, and Enzyme</li>
                  <li>Maintains a modern JavaScript ecosystem with tools like Webpack, Babel, ESLint, and Gulp</li>
                  <li>Enthusiastically supports group and pair programming to promote open communication within an
                    agile product development environment
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume">
              <div className="title"><img src="img/jama.png"/></div>
              <div className="title">
                <a href="http://www.jamasoftware.com" target="_blank">JAMA SOFTWARE</a>
                <div className="time">(February 2016 - October 2017)</div>
                Software Engineer, Mid-Level
              </div>
              <div className="description">
                <ul>
                  <li>Worked with UX and Product teams to implement market-differentiating features for requirements
                    management software
                  </li>
                  <li>Refactored and improved a Java and EXT.js legacy codebase using React.js, Fluxxor, and Redux</li>
                  <li>Developed code using test- and behavior-driven techniques with Jasmine, Karma, JUnit, and Enzyme</li>
                  <li>Contributed to the development of an autoscaled Java microservice using AWS ECS</li>
                </ul>
              </div>
            </div>

            <div className="resume">
              <div className="title"><img src="img/littlebird_logo.png" height="60px"/></div>
              <div className="title">
                <a href="http://getlittlebird.com" target="_blank">LITTLE BIRD</a>
                <div className="time">(January 2014 - December 2015)</div>
                Software Engineer
              </div>
              <div className="description">
                <ul>
                  <li>Worked with Ruby, Clojure, ClojureScript, React.js, HTML/CSS, JavaScript, MongoDB, PostgreSQL
                  </li>
                  <li>Developed front- and back-end application features for network graph analysis software</li>
                  <li>Scripted browser testing automation for QA</li>
                  <li>Created data visualizations using D3 and Gephi</li>
                  <li>Managed branched projects with Git in an agile environment</li>
                </ul>
              </div>

              <h1 className="resume-subhead">Education</h1>
              <div className="edu">
                <ul>
                  <li>
                    <a href="http://www.tufts.edu" target="_blank">Tufts University</a> — B.A. International Letters
                    and Visual Studies (2009)
                  </li>
                  <li>
                    <a href="http://www.uni-tuebingen.de" target="_blank">Universit&auml;t T&uuml;bingen</a>
                    — German Studies (2005)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
};
