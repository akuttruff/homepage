import React from 'react';
import SideBar from './sidebar';
import { musicDetails } from '../data';

export default function Music() {
  const {
    title,
    description,
    email,
    emailLabel,
    imgSrc,
  } = musicDetails;

    return (
      <div id="layout" className="pure-g">
        <SideBar/>
        <div className="content pure-u-1 pure-u-md-3-4">
          <div className="resume">
            <h1 className="resume-subhead">{title}</h1>
            <ul className="description">
              <li>{description}</li>
              <li><a href={email}>{emailLabel}</a> for more information</li>
            </ul>
            <img src={imgSrc}
                 alt="Outdoor string trio concert at Breitenbush Hot Springs, Oregon"
                 className="title"
                 width="100%"
              />
          </div>
        </div>
      </div>
    );
}