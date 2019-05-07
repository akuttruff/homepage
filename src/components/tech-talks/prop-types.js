import PropTypes from 'prop-types';

const TALK_DETAIL = PropTypes.shape({
  title: PropTypes.string.isRequired,
  talkSrc: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  summaryId: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  talkComponent: PropTypes.element.isRequired,
}).isRequired;

const TALK_DETAILS = PropTypes.arrayOf(TALK_DETAIL).isRequired;

export {
  TALK_DETAIL,
  TALK_DETAILS,
};
