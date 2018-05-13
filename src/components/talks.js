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
            <div>
              <div className="col">
                <a href="https://youtu.be/SOIhncWcCjA" target="_blank">
                  <img src="img/ClojureWestPoster.jpg"
                    id="clojure-west"
                    height='auto'
                    width="460" />
                </a>
                <div>DEEPEN AND DIVERSIFY THE CLOJURE COMMUNITY WITH JUNIOR ENGINEERS</div>
                <a href="http://2016.clojurewest.org/speakers#akuttruff" target="_blank">(Clojure/West 2016, Seattle WA)</a>
                <br/>
                <div id="clojure-summary">
                  The simplicity of the Clojure language and the supportive, collaborative spirit of its community played a pivotal role in my success as a junior engineer. I felt frustrated with cryptic 'method_missing' stack traces in my first years of programming, and Clojure reshaped the way I saw code and data. This talk examines elements of the language that help and hinder newcomers, ways in which teams can better support junior developers, and how companies can create value by investing in upcoming talent.
                </div>
                <br/>
              </div>
              <div className="col">
                <video
                  id="graph-ql"
                  controls
                  width="460"
                  src="https://s3-us-west-2.amazonaws.com/akuttruff-media/GraphQL.mp4"
                  poster="img/GraphQLPoster.jpg">
                </video>
                <br/>
                SCHEMA-DRIVEN DEVELOPMENT WITH GRAPHQL AND REACT-APOLLO
                <a href="https://renewfinancial.com/government" target="_blank">(Renew Financial 2018, Portland OR)</a>
                <br/>
                <div id="graphql-summary">
                  GraphQL is a query language and server-side runtime for processing queries and mutations of data. It's language-agnostic, and allows you to define your own type system. With GraphQL, the shape of your query matches the shape of your response data, without the over- or under-fetching of data that you get with REST APIs. Combined with Apollo-React, GraphQL is a breath of fresh air for the full-stack development landscape.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


