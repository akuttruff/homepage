import React from 'react';
import WorkDetailList from '../../components/resume/work-detail-list';
import { educationDetails, workDetails } from '../../data/index';
import Sidebar from '../sidebar';
import EducationDetails from '../../components/resume/education-details';

const Resume = () => (
  <div>
    <Sidebar />
    <div className="content">
      <div className="resume">
        <WorkDetailList workDetails={workDetails} />
        <EducationDetails educationDetails={educationDetails} />
      </div>
    </div>
  </div>
);

export default Resume;
