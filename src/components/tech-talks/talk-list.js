import React from 'react';
import { TALK_DETAILS } from './prop-types';
import TalkDetail from './talk-detail';

const TalkList = ({ talkDetails }) => talkDetails.map((detail, index) => (
  <TalkDetail
    key={index}
    detail={detail}
  />
));

export default TalkList;

TalkList.propTypes = TALK_DETAILS;
