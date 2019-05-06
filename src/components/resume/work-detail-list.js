import React from 'react';
import PropTypes from 'prop-types';
import WorkDetail from './work-detail';

const WorkDetailList = ({ workDetails }) => {
  return (
    <div>
      <h1 className="resume-subhead">Work</h1>
      { workDetails.map(detail => <WorkDetail detail={detail}/>) }
    </div>
  );
};

export default WorkDetailList;

WorkDetailList.propTypes = {
  workDetails: PropTypes.arrayOf(
    PropTypes.shape({
      detail: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          companyUrl: PropTypes.string.isRequired,
          company: PropTypes.string.isRequired,
          timeRange: PropTypes.string.isRequired,
        })
      ),
    })
  )
};
