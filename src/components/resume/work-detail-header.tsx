import React from 'react';

export interface WorkDetailType {
  img: string;
  alt: string;
  companyUrl: string;
  company: string | null;
  timeRange: string;
  title: string;
}

interface WorkDetailHeaderProps {
  detail: WorkDetailType;
}

const WorkDetailHeader = ({ detail }: WorkDetailHeaderProps) => {
  const {
    img,
    alt,
    companyUrl,
    timeRange,
    title,
    company,
  } = detail;
  return (
    <div>
      <div className="title">
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={alt} height="60px" />
        </a>
      </div>
      <div className="title">
        {company && <a href={companyUrl} target="_blank" rel="noopener noreferrer">{company}</a> }
        <div className="time">{timeRange}</div>
        {title}
      </div>
    </div>
  );
};

export default WorkDetailHeader;
