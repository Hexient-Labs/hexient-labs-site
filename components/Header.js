// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll';
import Link from 'next/link';


// Constant imports
import design from '../constants/design';
import contact from '../constants/contact';


export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-fixed-top"
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
                  <a href="#">
                    {contact.phoneHyphen}
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
      nav {
        background-color: ${design.colors.white};
        min-height: 80px;
      }
      li a {
        font-weight: 400;
        color: ${design.colors.black};
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
        font-size: 2rem;
      }
      .header-link-bordered {
        border: 0px solid black;
        margin-top: 20px;
      }
      .navbar {
        margin-top: 0px;
      }
    `}</style>
      </div>
    );
  }
};


Header.propTypes = {};


Header.defaultProps = {};
