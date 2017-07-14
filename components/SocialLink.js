// Module imports
import React from 'react';
import PropTypes from 'prop-types';


// Constant imports
import design from '../constants/design';

const SocialLink = ({ color, link }) => (
  <div>
    <a
      href={link.href}
      target="_blank"
    >
      <i className={`fa fa-${link.icon}`} />
    </a>
    <style jsx>{`
      .fa {
        color: ${design.colors.primary};
        font-size: 3rem;
        margin-left: 20px;
        margin-right: 20px;
      }
    `}</style>
  </div>
);


SocialLink.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};


SocialLink.defaultProps = {};


export default SocialLink;
