import React from 'react';
import TalkDetail, { TalkDetailType } from './talk-detail';

interface TalkListProps {
  talkDetails: TalkDetailType[];
}

const TalkList = ({ talkDetails }: TalkListProps) => talkDetails.map((detail, index) => (
  <TalkDetail
    key={index}
    detail={detail}
  />
));

export default TalkList;
