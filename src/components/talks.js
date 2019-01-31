import React, { Component } from 'react';
import SideBar from './sidebar';
import { talkDetails } from '../data';

function TalkDetail(props) {
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
      { talkComponent }
      <div>{title}</div>
      <a href={talkSrc} target="_blank" rel="noopener noreferrer">{location}</a>
      <br/>
      <div id={summaryId}>{summary}</div>
      <br/>
    </div>
  )
}

function TalkList({ talkDetails }) {
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
}

export default class Talks extends Component {
  render() {
    return (
      <div>
        <SideBar/>
        <div className="content">
          <div className="resume">
            <h1 className="resume-subhead">Talks</h1>
              <TalkList talkDetails={talkDetails} />
          </div>
        </div>
      </div>
    )
  }
};


