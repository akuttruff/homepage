import React from 'react';
import { TALK_DETAIL } from './prop-types';

const TalkDetail = ({ detail }) => {
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
      { talkComponent }
      <div className="talk-title">{title}</div>
      <a href={talkSrc} target="_blank" rel="noopener noreferrer" className="work-link">{location}</a>
      <div id={summaryId}>{summary}</div>
    </div>
  );
};

TalkDetail.propTypes = TALK_DETAIL;

export default TalkDetail;
