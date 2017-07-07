// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll';
import Link from 'next/link';


// Constant imports
import design from '../constants/design';


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.goToContact = () => {
      smoothscroll(this.contactUsDestination);
    };
  }

  componentDidMount() {
    this.contactUsDestination = document.getElementById('contact-us-section');
  }

  render() {
    const { opacity } = this.props;
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-fixed-top"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${opacity * 10})`,
          }}
        >
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
              <Link
                href="/"
              >
                <div className="navbar-brand">
                  <img
                    src="../static/logo.png"
                    alt="Hexient Labs"
                    className="img img-responsive"
                  />
                </div>
              </Link>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li className="header-link-bordered">
                  <a href="#" onClick={this.goToContact}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <style jsx>{`
      .img {
        width: 140px;
      }
      .navbar-default .navbar-toggle .icon-bar {
        background-color: black;
      }
      nav {
        background-color: transparent;
        min-height: 80px;
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
  }
};


Header.propTypes = {
  opacity: PropTypes.number.isRequired,
};


Header.defaultProps = {};
