import React from 'react';

export interface TalkDetailType {
  title: string;
  talkSrc: string;
  location: string;
  summaryId: string;
  summary: string;
  talkComponent: React.ReactNode;
}

interface TalkDetailProps {
  detail: TalkDetailType;
}

const TalkDetail = ({ detail }: TalkDetailProps) => {
  const {
    title,
    talkSrc,
    location,
    summaryId,
    summary,
    talkComponent,
  } = detail;

  return (
    <div className="col">
      {talkComponent}
      <div className="talk-title">{title}</div>
      <a href={talkSrc} target="_blank" rel="noopener noreferrer" className="work-link">{location}</a>
      <div id={summaryId}>{summary}</div>
    </div>
  );
};

export default TalkDetail;
