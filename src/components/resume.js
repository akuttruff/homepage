import React from 'react';
import SideBar from './sidebar';
import { workDetails, educationDetails } from '../data';

function WorkDetail({ detail }) {
  const {
    imageSrc,
    alt,
    companyLink,
    company,
    time,
    title,
    description,
  } = detail;

  return <div>
    <div className="title"><img src={imageSrc} alt={alt} height="60px"/></div>
    <div className="title">
      <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a>
      <div className="time">{time}</div>
      {title}
    </div>
    <div className="description">
      <ul>
        {description.map(item => <li> {item} </li>)}
      </ul>
    </div>
  </div>
}

function WorkDetailList() {
  return (
    <div>
      <h1 className="resume-subhead">Work</h1>
      { workDetails.map(detail => <WorkDetail detail={detail}/>) }
    </div>
  );
}

function EducationDetail({ detail }) {
  const { schoolLink, school, subject } = detail;
  return (
    <li>
      <a href={schoolLink} target="_blank" rel="noopener noreferrer">{school}</a>
      {subject}
    </li>
  );
}

function EducationDetails() {
  return (
    <div>
      <h1 className="resume-subhead">Education</h1>
      <div className="edu">
        <ul>
          { educationDetails.map(detail => <EducationDetail detail={detail} />) }
        </ul>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div id="layout" className="pure-g">
      <SideBar/>
      <div className="content pure-u-1 pure-u-md-3-4">
        <div className="resume">
          <WorkDetailList/>
          <EducationDetails/>
        </div>
      </div>
    </div>
  );
};
