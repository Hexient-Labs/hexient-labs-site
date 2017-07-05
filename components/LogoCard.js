// Module imports
import React from 'react';
import PropTypes from 'prop-types';


// Constant imports
import design from '../constants/design';


const LogoCard = ({ children, content, title }) => (
  <div className="wrapper">
    <div className="container-fluid text-center">
      <div className="col-md-10 col-md-offset-1">
        {children}
        <br /><br />
        <h3 className="title">{title}</h3>
        <br /><br />
        <h5 className="content">{content}</h5>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.25);
      }
      .container-fluid {
        padding-top: 40px;
        padding-bottom: 25px;
      }
      .title {
        font-weight: ${design.fonts.boldWeight};
        color: ${design.colors.primary};
      }
      .content {
        color: ${design.colors.gray};
      }
    `}</style>
  </div>
);


LogoCard.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default LogoCard;