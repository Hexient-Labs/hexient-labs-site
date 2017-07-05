// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Constant imports
import design from '../constants/design';

const SectionTitle = ({ title }) => (
  <div className="container-fluid">
    <div className="col-md-2 col-md-offset-5 text-center">
      <h4>
        {title.toUpperCase()}
      </h4>
      <hr />
    </div>
    <style jsx>{`
      hr {
        border-color: ${design.colors.primary};
        width: 35%;
        border-width: 2px;
      }
    `}
    </style>
  </div>
);


SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};


export default SectionTitle;
