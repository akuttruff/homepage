import React from 'react';
import WorkDetail, { WorkDetailType } from './work-detail';

interface WorkDetailListProps {
  workDetails: WorkDetailType[];
}

const WorkDetailList = ({ workDetails }: WorkDetailListProps) => (
  <div>
    <h1 className="resume-subhead">Work</h1>
    {workDetails.map((detail, index) => <WorkDetail detail={detail} key={index} />)}
  </div>
);

export default WorkDetailList;
