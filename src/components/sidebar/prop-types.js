import PropTypes from 'prop-types';

const ROUTE = PropTypes.shape({
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;

const ROUTES = PropTypes.arrayOf(ROUTE).isRequired;

const SOCIAL_LINK = PropTypes.shape({
  url: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
}).isRequired;

const SOCIAL_LINKS = PropTypes.arrayOf(SOCIAL_LINK).isRequired;

export {
  ROUTE,
  ROUTES,
  SOCIAL_LINK,
  SOCIAL_LINKS,
};
