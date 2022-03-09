import React from 'react';
import WorkDetailHeader from './work-detail-header';
import { WORK_DETAIL } from './prop-types';


const WorkDetail = ({ detail }) => {
  const { descriptionItems } = detail;
  return (
    <>
      <WorkDetailHeader detail={detail} />
      <div className="description">
        <ul>
          {descriptionItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

WorkDetail.propTypes = WORK_DETAIL;

export default WorkDetail;
