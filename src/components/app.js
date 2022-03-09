import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Resume from '../containers/resume/index';
import Music from '../containers/music/index';
import TechTalks from '../containers/tech-talks/index';
import Writing from '../containers/writing';

const App = () => (
  <Router>
    <Routes style={{ margin: 0 }}>
      <Route exact path="/" element={<Resume />} />
      <Route exact path="/work" element={<Resume />} />
      <Route exact path="/talks" element={<TechTalks />} />
      <Route exact path="/music" element={<Music />} />
      <Route exact path="/writing" elementt={<Writing />} />
    </Routes>
  </Router>
);
export default App;
