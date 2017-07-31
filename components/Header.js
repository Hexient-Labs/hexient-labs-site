// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll';
import Link from 'next/link';


// Constant imports
import design from '../constants/design';
import contact from '../constants/contact';


export default class Header extends Component {
  componentDidMount() {
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="bea9a72f-dbf0-4281-a9c9-966be3df7c8f";
    (function(){
      const d = document;
      const s = d.createElement("script");
      s.src="https://client.crisp.chat/l.js";
      s.async=1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-fixed-top"
        >
          <div className="container">
            <div className="navbar-header">
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

            <div className="hidden-xs hidden-sm">
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
