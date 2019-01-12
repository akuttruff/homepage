import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Resume from './resume';
import Music from './music';
import Talks from './talks';

const HomePage = () => (
  <Router>
    <div>
      <Route exact path="/" component={Resume}/>
      <Route path="/work" component={Resume}/>
      <Route path="/talks" component={Talks}/>
      <Route path="/music" component={Music}/>
    </div>
  </Router>
);
export default HomePage;