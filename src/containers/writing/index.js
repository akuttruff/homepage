import React from 'react';
import SkywardBlog from '../../components/writing/skyward-blog';
import Sidebar from '../sidebar/index';
import skywardBlog from '../../data/skyward-blog';

const Writing = () => (
  <div>
    <Sidebar />
    <div className="content">
      <SkywardBlog skywardBlog={skywardBlog} />
    </div>
  </div>
);

export default Writing;
