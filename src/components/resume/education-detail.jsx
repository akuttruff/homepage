import React from 'react';
import { EDUCATION_DETAIL } from './prop-types';


const EducationDetail = ({ detail }) => {
  const { schoolLink, school, subject } = detail;
  return (
    <li>
      <a href={schoolLink} target="_blank" rel="noopener noreferrer">{school}</a>
      {subject}
    </li>
  );
};

export default EducationDetail;

EducationDetail.propTypes = EDUCATION_DETAIL;
