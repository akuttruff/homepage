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

const App = (): React.JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/work" element={<Resume />} />
      <Route path="/talks" element={<TechTalks />} />
      <Route path="/music" element={<Music />} />
      <Route path="/writing" element={<Writing />} />
    </Routes>
  </Router>
);
export default App;
