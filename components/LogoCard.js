// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';


// Constant imports
import design from '../constants/design';


const LogoCard = ({ children, content, link, title }) => (
  <div className="wrapper">
    <div className="container-fluid text-center">
      <div className="col-md-10 col-md-offset-1">
        {children}
        <br />
        {(() => {
          if (link) {
            return (
              <Link>
                <a href={link}>
                  <h3 className="title">{title}</h3>
                </a>
              </Link>
            );
          }
          return (
            <h3 className="title">
              {title}
            </h3>
          );
        })()}
        <br />
        {content}
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
    `}</style>
  </div>
);


LogoCard.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};


export default LogoCard;
