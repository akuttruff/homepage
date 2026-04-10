import React from 'react';
import EducationDetail, { EducationDetailType } from './education-detail';

interface EducationDetailsProps {
  educationDetails: EducationDetailType[];
}

const EducationDetails = ({ educationDetails }: EducationDetailsProps) => (
  <div>
    <h1 className="resume-subhead">Education</h1>
    <div className="edu">
      <ul>
        {educationDetails.map((detail, index) => <EducationDetail detail={detail} key={index} />)}
      </ul>
    </div>
  </div>
);

export default EducationDetails;
