// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports

// Constant imports
import design from '../constants/design';

const Header = () => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div
            className="navbar-brand"
            href="#"
          >
            <img
              src="../static/logo.png"
              alt="Hexient Labs"
              className="img img-responsive"
            />
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="header-link-bordered">
              <a href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <style jsx>{`
      .img {
        width: 120px;
      }
      nav {
        background-color: white;
        min-height: 64px;
      }
      li a {
        font-weight: ${design.fonts.mediumWeight};
        color: ${design.colors.black};
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
      }
      .header-link-bordered {
        border: 2px solid black;
        margin-top: 20px;
      }
    `}</style>
  </div>
);


Header.propTypes = {};


Header.defaultProps = {};


export default Header;
