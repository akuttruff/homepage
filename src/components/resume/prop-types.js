import PropTypes from 'prop-types';

const WORK_DETAIL = PropTypes.shape({
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  timeRange: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptionItems: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
}).isRequired;

const WORK_DETAILS = PropTypes.arrayOf(WORK_DETAIL).isRequired;

const EDUCATION_DETAIL = PropTypes.shape({
  schoolLink: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
}).isRequired;

const EDUCATION_DETAILS = PropTypes.arrayOf(EDUCATION_DETAIL).isRequired;

export {
  WORK_DETAIL,
  WORK_DETAILS,
  EDUCATION_DETAIL,
  EDUCATION_DETAILS,
};
