import React from 'react';
import PropTypes from 'prop-types';
import TalkDetail from './talk-detail';

const TalkList = ({ talkDetails }) => {
  return talkDetails.map((talk, index) => {
    const {
      title,
      talkSrc,
      location,
      summaryId,
      summary,
      talkComponent
    } = talk;

    return <TalkDetail
      key={index}
      title={title}
      talkSrc={talkSrc}
      location={location}
      summaryId={summaryId}
      summary={summary}
      talkComponent={talkComponent}
    />

  });
};

export default TalkList;

TalkList.propTypes = {
  talkDetails: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        talkSrc: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        summaryId: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        talkComponent: PropTypes.node.isRequired
      }),
  ),
};
