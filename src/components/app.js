import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Resume from '../containers/resume/index';
import Music from '../containers/music/index';
import TechTalks from '../containers/tech-talks/index';
import Writing from './writing';

const HomePage = () => (
  <Router>
    <div>
      <Route exact path="/" component={Resume}/>
      <Route path="/work" component={Resume}/>
      <Route path="/talks" component={TechTalks}/>
      <Route path="/music" component={Music}/>
      <Route path="/writing" component={Writing}/>
    </div>
  </Router>
);
export default HomePage;
