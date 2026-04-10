import React from 'react';
import { WORK_DETAILS } from './prop-types';
import WorkDetail from './work-detail';

const WorkDetailList = ({ workDetails }) => (
  <div>
    <h1 className="resume-subhead">Work</h1>
    { workDetails.map((detail, index) => <WorkDetail detail={detail} key={index} />) }
  </div>
);

export default WorkDetailList;

WorkDetailList.propTypes = WORK_DETAILS;
