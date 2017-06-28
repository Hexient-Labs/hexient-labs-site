// Module imports
import React from 'react';
import PropTypes from 'prop-types';


// Component imports
import Logo from './Logo';
import SocialLink from './SocialLink';


const Footer = ({ socialLinks, otherLinks }) => (
  <div className="footer navbar-static-bottom">
    <div className="social-links-container">
      <SocialLink link={{ href: '', icon: 'facebook-square' }} />
      <SocialLink link={{ href: '', icon: 'twitter-square' }} />
      <SocialLink link={{ href: '', icon: 'linkedin-square' }} />
    </div>
    <Logo />
    <h5>Copyright © Hexient Labs 2017. All Rights Reserved.</h5>
    <style jsx>{`
      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        background-color: #000000;
        height: 250px;
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


Footer.propTypes = {};


Footer.defaultProps = {};


Footer.propDescription = [];


export default Footer;
