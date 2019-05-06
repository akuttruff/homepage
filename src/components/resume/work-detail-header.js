import React from 'react';
import PropTypes from 'prop-types';

const WorkDetailHeader = ({ detail }) => {
  const {
    img,
    alt,
    companyUrl,
    company,
    timeRange,
    title,
  } = detail;
  return (
    <div>
      <div className="title"><img src={img} alt={alt} height="60px"/></div>
      <div className="title">
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">{company}</a>
        <div className="time">{timeRange}</div>
        {title}
      </div>
    </div>
  );
};

export default WorkDetailHeader;

WorkDetailHeader.propTypes = {
  detail: PropTypes.shape({
    detail: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        companyUrl: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        timeRange: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  }),
};
