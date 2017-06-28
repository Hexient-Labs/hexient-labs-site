// Module imports
import PropTypes from 'prop-types';

const Button = ({ disabled, loading, onClick, title }) => (
  <button
    className="btn btn-primary"
    disabled={disabled}
    onClick={onClick}
  >
    {loading ? 'Loading' : title}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  title: 'Submit',
};

export default Button;
