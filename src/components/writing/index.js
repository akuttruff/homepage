import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../containers/sidebar';
import { skywardBlog } from '../../data/skyward-blog';
import { flightInsightsPhoto } from '../../img'

const textStyles = {
  fontSize: '1.2em',
  color: '#444',
  lineHeight: '1.4em',
  letterSpacing: '1.1px',
}

const Writing = () => {
  return (
    <div>
      <Sidebar/>
      <div className="content">
        <div className="resume">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <img src={flightInsightsPhoto}
                 alt='A laptop computer displaying a map with flight clusters and a list of flight data'
                 className="title"
                 width="50%"
            />
          </div>
          {skywardBlog.map(paragraph => {
            return (
              <div style={textStyles}>
                <div dangerouslySetInnerHTML={{ __html: paragraph }}/>
                <br/>
              </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Writing;
