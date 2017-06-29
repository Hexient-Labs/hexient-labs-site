// Module imports
import React from 'react';
import PropTypes from 'prop-types';


const TextInput = ({ onChange, phone, placeholder }) => (
  <input
    required
    type="text"
    className={`form-control input-lg ${phone ? 'phone-input' : ''}`}
    placeholder={placeholder}
    onChange={onChange}
    style={{
      backgroundColor: 'transparent',
      borderColor: '#000000',
      borderRadius: 0,

    }}
  />
);


TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  phone: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  phone: false,
};


export default TextInput;
