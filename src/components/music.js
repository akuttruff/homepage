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
      <div>
        <SideBar/>
        <div className="content">
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