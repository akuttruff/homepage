/* eslint-disable react/no-danger */
import React from 'react';
import { flightInsightsPhoto } from '../../img/index';
import BLOG from './prop-types';

const textStyles = {
  fontSize: '1.2em',
  color: '#444',
  lineHeight: '1.4em',
  letterSpacing: '1.1px',
};

const SkywardBlog = ({ skywardBlog }) => (
  <div className="resume">
    <figure style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <img
        src={flightInsightsPhoto}
        alt="A laptop computer displaying a map with flight clusters and a list of flight data"
        width="50%"
      />
      <figcaption>Flight Insights, Skyward IO</figcaption>
    </figure>
    <div style={{ padding: '4em' }}>
      {skywardBlog.map(paragraph => (
        <div style={textStyles}>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
          <br />
        </div>
      ))}
    </div>
  </div>
);

export default SkywardBlog;

SkywardBlog.propTypes = BLOG;
