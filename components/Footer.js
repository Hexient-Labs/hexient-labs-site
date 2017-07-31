// Module imports
import React from 'react';


// Component imports
import SocialLink from './SocialLink';


// Constant imports
import contact from '../constants/contact';
import design from '../constants/design';


const Footer = ({ socialLinks, otherLinks }) => (
  <div className="footer navbar-static-bottom">
    <div className="container-fluid text-center hl-flex hl-flex-justifyContentCenter">
      <SocialLink
        link={{
          href: 'https://www.facebook.com/Hexient-Labs-250421448789875/',
          icon: 'facebook'
        }}
      />
      <SocialLink
        link={{
          href: 'https://twitter.com/HexientLabs',
          icon: 'twitter'
        }}
      />
      <SocialLink
        link={{
          href: 'https://www.linkedin.com/company-beta/24771280/',
          icon: 'linkedin'
        }}
      />
      <SocialLink
        link={{
          href: 'https://medium.com/hexient-labs',
          icon: 'medium'
        }}
      />
    </div>
    <div className="container-fluid text-center spacer">
      <div className="col-md-6 col-md-offset-3">
        <img src="../static/HexientLabs-Logo.png" alt="Hexient Labs Logo" className="img img-responsive" />
      </div>
    </div>
    <div className="container-fluid text-center spacer">
      <div className="col-md-6 col-md-offset-3">
        <h6>{contact.phoneHyphen}</h6>
      </div>
    </div>
    <div className="container-fluid text-center spacer">
      <div className="col-md-6 col-md-offset-3">
        <h6>Copyright © Hexient Labs 2017. All Rights Reserved.</h6>
      </div>
    </div>
    <style jsx>{`
      .footer {
        background-color: ${design.colors.black};
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .spacer {
        margin-top: 20px;
      }
      img {
        height: 60px;
        margin: auto;
      }
      h6 {
        color: ${design.colors.white};
        font-weight: 200;
        font-size: 2rem;
      }
    `}</style>
  </div>
);


Footer.propTypes = {};


Footer.defaultProps = {};


Footer.propDescription = [];


export default Footer;
