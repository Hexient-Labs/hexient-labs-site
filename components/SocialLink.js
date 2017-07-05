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
        font-size: 5rem;
        margin-left: 10px;
        margin-right: 10px;
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


SocialLink.propDescription = [
  {
    name: 'link',
    type: '{ href: {String}, icon: {String}, }',
    required: true,
    default: 'n/a',
    desc: 'Link holding a href and icon to display',
  },
];


export default SocialLink;
