// Module imports
import React from 'react';


// Component imports
import SocialLink from './SocialLink';


// Constant imports
import design from '../constants/design';


const Footer = ({ socialLinks, otherLinks }) => (
  <div className="footer navbar-static-bottom">
    <div className="container-fluid text-center hl-flex hl-flex-justifyContentCenter">
      <SocialLink
        link={{
          href: 'https://www.facebook.com/Hexient-Labs-250421448789875/',
          icon: 'facebook-square'
        }}
      />
      <SocialLink
        link={{
          href: 'https://twitter.com/HexientLabs',
          icon: 'twitter-square'
        }}
      />
      <SocialLink
        link={{
          href: 'https://www.linkedin.com/company-beta/24771280/',
          icon: 'linkedin-square'
        }}
      />
    </div>
    <div className="container-fluid text-center">
      <div className="col-md-6 col-md-offset-3">
        <img src="../static/logo.png" alt="Hexient Labs Logo" className="img img-responsive" />
      </div>
    </div>
    <div className="container-fluid text-center">
      <div className="col-md-6 col-md-offset-3">
        <h5>Copyright © Hexient Labs 2017. All Rights Reserved.</h5>
      </div>
    </div>
    <style jsx>{`
      .footer {
        background-color: ${design.colors.lightgray};
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .container-fluid {
        margin-top: 30px;
      }
      img {
        height: 60px;
        margin: auto;
      }
      h5 {
        color: ${design.colors.black};
      }
    `}</style>
  </div>
);


Footer.propTypes = {};


Footer.defaultProps = {};


Footer.propDescription = [];


export default Footer;
