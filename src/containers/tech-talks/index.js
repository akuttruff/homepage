import React from 'react';
import { talkDetails } from '../../data/index';
import Sidebar from '../sidebar';
import TalkList from '../../components/tech-talks/talk-list';

const TechTalks = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <div className="resume">
          <h1 className="resume-subhead">Talks</h1>
          <TalkList talkDetails={talkDetails}/>
        </div>
      </div>
    </div>
  );
};

export default TechTalks;
