// Module imports
import React from 'react';
import PropTypes from 'prop-types';


// Component imports
import SocialLink from './SocialLink';


const Footer = ({ socialLinks, otherLinks }) => (
  <div className="footer navbar-fixed-bottom">
    <div className="social-links-container">
      <SocialLink link={{ href: '', icon: 'facebook-square' }} />
      <SocialLink link={{ href: '', icon: 'twitter-square' }} />
      <SocialLink link={{ href: '', icon: 'linkedin-square' }} />
    </div>
    <h5>Copyright © Hexient Labs 2017. All Rights Reserved.</h5>
    <style jsx>{`
      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        background-color: #000000;
        height: 140px;
        color: #FFEB3B;
        padding: 20px;
        width: 100%;
      }
      .social-links-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);


Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })),
  otherLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};


Footer.defaultProps = {
  socialLinks: [],
  otherLinks: [],
};


Footer.propDescription = [
  {
    name: 'socialLinks',
    type: 'Array<{href: {String}, icon:{String}}>',
    required: false,
    default: '[]',
    desc: 'Social links (rendered as icons)',
  },
  {
    name: 'otherLinks',
    type: 'Array<{href: {String}, title:{String}}>',
    required: false,
    default: '[]',
    desc: 'Other links',
  },
];


export default Footer;
