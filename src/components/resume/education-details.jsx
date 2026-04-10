import React from 'react';
import EducationDetail from './education-detail';
import { EDUCATION_DETAILS } from './prop-types';

const EducationDetails = ({ educationDetails }) => (
  <div>
    <h1 className="resume-subhead">Education</h1>
    <div className="edu">
      <ul>
        { educationDetails.map((detail, index) => <EducationDetail detail={detail} key={index} />) }
      </ul>
    </div>
  </div>
);

export default EducationDetails;

EducationDetails.propTypes = EDUCATION_DETAILS;
