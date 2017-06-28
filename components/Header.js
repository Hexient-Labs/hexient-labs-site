// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';


const Header = () => (
  <div>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
          <span className="sr-only">
            Toggle navigation
          </span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a
            className="navbar-brand"
            href="#">
            HEXIENT LABS
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">
                Link
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <style jsx global>{`
      body {
        padding-top: 64px;
      }
    `}</style>
  </div>
);


Header.propTypes = {};


Header.defaultProps = {};


Header.propDescription = [
  {
    name: 'socialLinks',
    type: 'Array<{href: {String}, icon:{String}}>',
    required: false,
    default: '[]',
    desc: 'Social links (rendered as icons)',
  },

];


export default Header;
