import React from 'react';
import SideBar from './sidebar';
import { workDetails, educationDetails } from '../data';

function WorkDetailHeader({ detail }) {
  const {
    imageSrc,
    alt,
    companyLink,
    company,
    time,
    title,
  } = detail;
  return (
    <div>
      <div className="title"><img src={imageSrc} alt={alt} height="60px"/></div>
      <div className="title">
        <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a>
        <div className="time">{time}</div>
        {title}
      </div>
    </div>
  );
}

function WorkDetail({ detail }) {
  const { description } = detail;
  return (
    <div>
      <WorkDetailHeader detail={detail} />
      <div className="description">
        <ul>
          {description.map((item, index) => <li key={index}> {item} </li>)}
        </ul>
      </div>
    </div>
    );
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
    <div>
      <SideBar/>
      <div className="content">
        <div className="resume">
          <WorkDetailList/>
          <EducationDetails/>
        </div>
      </div>
    </div>
  );
};
