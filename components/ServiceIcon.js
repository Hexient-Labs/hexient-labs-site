import React from 'react';
import PropTypes from 'prop-types';

const ServiceIcon = ({ icon, title }) => (
  <div className="text-center">
    <i className={`fa fa-${icon}`} />
    <h5>{title}</h5>
    <style jsx>{`
      i {
        font-size: 5rem;
      }
    `}</style>
  </div>
);


ServiceIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default ServiceIcon;
