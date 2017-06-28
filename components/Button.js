// Module imports
import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ block, disabled, loading, onClick, size, title, type }) => (
  <button
    className={`btn btn-${size} btn-${type} ${block ? 'btn-block' : ''}`}
    disabled={disabled || loading}
    onClick={onClick}
  >
    {loading ? 'Loading...' : title}
  </button>
);


Button.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};


Button.defaultProps = {
  block: false,
  disabled: false,
  loading: false,
  size: 'md',
  title: 'Submit',
  type: 'default',
};


Button.propDescription = [
  {
    name: 'block',
    type: 'Boolean',
    required: false,
    default: false,
    desc: 'Whether the button is a btn-block or not',
  },
  {
    name: 'disabled',
    type: 'Boolean',
    required: false,
    default: false,
    desc: 'Whether the button is disabled or not',
  },
  {
    name: 'loading',
    type: 'Boolean',
    required: false,
    default: false,
    desc: 'Whether the button is in loading state',
  },
  {
    name: 'onClick',
    type: 'Function',
    required: true,
    default: 'n/a',
    desc: 'onClick handler',
  },
  {
    name: 'size',
    type: 'String',
    required: false,
    default: 'md',
    desc: 'The size of the button (sm, md, lg)',
  },
  {
    name: 'title',
    type: 'String',
    required: false,
    default: 'Submit',
    desc: 'Title of the button',
  },
  {
    name: 'type',
    type: 'String',
    required: false,
    default: 'default',
    desc: 'The type of button (primary, success, info, warning, danger, default)',
  },
];


export default Button;
