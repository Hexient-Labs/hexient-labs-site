// Module imports
import React from 'react';

// Component imports
import Logo from './Logo';
import HeaderLink from './HeaderLink';


// Constant imports
import contact from '../constants/contact';

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
          <ul className="nav navbar-nav navbar-right">
            <HeaderLink pathname="/prototypes" title="Prototypes" />
            <HeaderLink pathname="/mobile" title="Mobile" />
            <HeaderLink pathname="/web" title="Web" />
            <HeaderLink pathname="/tools" title="Tools" />
            <HeaderLink pathname="/projects" title="Projects" />
            <HeaderLink pathname="/login" title="Login" />
            <HeaderLink pathname={`tel:${contact.phonePlain}`} title={contact.phoneDotted} />
          </ul>
        </div>
      </div>
    </nav>
  </div>
);


Header.propTypes = {};


Header.defaultProps = {};


Header.propDescription = [];


export default Header;
