// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import HeaderLink from './HeaderLink';


// Constant imports
import contact from '../constants/contact';

const Header = ({ opacity }) => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top" style={{ opacity: opacity * 1.5 }}>
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
            <HeaderLink pathname={`tel:${contact.phonePlain}`} title={contact.phoneDotted} />
          </ul>
        </div>
      </div>
    </nav>
  </div>
);


Header.propTypes = {
  opacity: PropTypes.number.isRequired,
};


Header.defaultProps = {};


Header.propDescription = [
  {
    name: 'opacity',
    type: 'Number',
    required: false,
    default: '0',
    desc: 'The opacity of the Header',
  },
];


export default Header;
