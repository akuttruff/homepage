import React from 'react';
import { WORK_DETAIL } from './prop-types';

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
      <div className="title"><img src={img} alt={alt} height="60px" /></div>
      <div className="title">
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">{company}</a>
        <div className="time">{timeRange}</div>
        {title}
      </div>
    </div>
  );
};

WorkDetailHeader.propTypes = WORK_DETAIL;

export default WorkDetailHeader;
