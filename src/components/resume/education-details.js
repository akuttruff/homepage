import React from 'react';
import PropTypes from 'prop-types';
import EducationDetail from './education-detail';

const EducationDetails = ({ educationDetails }) => {
  return (
    <div>
      <h1 className="resume-subhead">Education</h1>
      <div className="edu">
        <ul>
          { educationDetails.map(detail => <EducationDetail detail={detail} />) }
        </ul>
      </div>
    </div>
  );
};

export default EducationDetails;

EducationDetails.propTypes = {
  educationDetails: PropTypes.arrayOf(
    PropTypes.shape({
      schoolLink: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
