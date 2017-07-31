// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Constant imports
import design from '../constants/design';

const HenceFormStep = ({ children, description, title }) => (
  <div className="wrapper scroll-reveal">
    <h2>{title}</h2>
    <br />
    <h4>{description}</h4>
    <br /><br />
    {children}
    <style jsx>{`
    .wrapper {
      padding-top: 30px;
      background-color: ${design.colors.white};
      min-height: 40vh;
    }
    h2 {
      color: ${design.colors.primary};
    }
    h4 {
      font-weight: ${design.fonts.lightWeight};
    }
  `}</style>
  </div>
);


HenceFormStep.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default HenceFormStep;
