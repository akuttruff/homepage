import React from 'react';

export interface EducationDetailType {
  schoolLink: string;
  school: string;
  subject: string;
}

interface EducationDetailProps {
  detail: EducationDetailType;
}

const EducationDetail = ({ detail }: EducationDetailProps) => {
  const { schoolLink, school, subject } = detail;
  return (
    <li>
      <a href={schoolLink} target="_blank" rel="noopener noreferrer">{school}</a>
      {subject}
    </li>
  );
};

export default EducationDetail;
