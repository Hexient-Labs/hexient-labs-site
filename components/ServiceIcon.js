import React from 'react';
import PropTypes from 'prop-types';

const ServiceIcon = ({ icon, title }) => (
  <div className="text-center margin-bottom-10pct">
    <i className={`fa fa-${icon}`} />
    <h5>{title}</h5>
    <style jsx>{`
      i {
        font-size: 6rem;
      }
    `}</style>
  </div>
);


ServiceIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default ServiceIcon;
