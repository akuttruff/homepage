import React from 'react';
import PropTypes from 'prop-types';
import WorkDetailList from '../../components/resume/work-detail-list';
import { educationDetails, workDetails } from '../../data/index';
import Sidebar from '../sidebar';
import EducationDetails from '../../components/resume/education-details';

export default function Resume() {
  return (
    <div>
      <Sidebar/>
      <div className="content">
        <div className="resume">
          <WorkDetailList workDetails={workDetails} />
          <EducationDetails educationDetails={educationDetails} />
        </div>
      </div>
    </div>
  );
};

Resume.PropTypes = {
  educationDetails: PropTypes.arrayOf(
    PropTypes.shape({
      schoolLink: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
    }),
  ),
  workDetails: PropTypes.arrayOf(
    PropTypes.shape({
      detail: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          companyUrl: PropTypes.string.isRequired,
          company: PropTypes.string.isRequired,
          timeRange: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
