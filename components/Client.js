import React from 'react';
import PropTypes from 'prop-types';

const Client = ({ alt, imagePath }) => (
  <img
    src={imagePath}
    alt={alt}
    className="img img-responsive margin-top-5pct margin-bottom-10pct"
    style={{
      height: '40px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  />
);

Client.propTypes = {
  alt: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Client;
