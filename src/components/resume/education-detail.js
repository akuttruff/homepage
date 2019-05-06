import React from 'react';
import PropTypes from 'prop-types';

function EducationDetail({ detail }) {
  const { schoolLink, school, subject } = detail;
  return (
    <li>
      <a href={schoolLink} target="_blank" rel="noopener noreferrer">{school}</a>
      {subject}
    </li>
  );
}

export default EducationDetail;

EducationDetail.propTypes = {
  detail: PropTypes.arrayOf(
    PropTypes.shape({
      schoolLink: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ),
};
