import React from 'react';
import PropTypes from 'prop-types';
import WorkDetailHeader from './work-detail-header';

const WorkDetail = ({ detail }) => {
  const { descriptionItems } = detail;
  return (
    <div>
      <WorkDetailHeader detail={detail} />
      <div className="description">
        <ul>
          {descriptionItems.map((item, index) => <li key={index}> {item} </li>)}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetail;

WorkDetail.propTypes = {
  detail: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      companyUrl: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      timeRange: PropTypes.string.isRequired,
    })
  ),
};
