// Module imports
import PropTypes from 'prop-types';

const Subtitle = ({ subtitle }) => <h3>{subtitle}</h3>;

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
