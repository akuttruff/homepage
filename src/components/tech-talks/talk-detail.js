import React from 'react';
import PropTypes from 'prop-types';

const TalkDetail = (props) => {
  const {
    title,
    talkSrc,
    location,
    summaryId,
    summary,
    talkComponent
  } = props;

  return (
    <div className="col">
      {talkComponent}
      <div>{title}</div>
      <a href={talkSrc} target="_blank" rel="noopener noreferrer">{location}</a>
      <br/>
      <div id={summaryId}>{summary}</div>
      <br/>
    </div>
  )
};

export default TalkDetail;

TalkDetail.PropTypes = {
  title: PropTypes.string.isRequired,
  talkSrc: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  summaryId: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  talkComponent: PropTypes.node.isRequired
};
