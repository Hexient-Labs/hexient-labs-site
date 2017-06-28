// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';


// Constant imports
import design from '../constants/design';


class HeaderLink extends Component {
  state = {
    pathname: '',
  };

  componentDidMount() {
    this.setState({
      pathname: window.location.pathname,
    });
  }

  render() {
    const {
      pathname,
      title,
    } = this.props;

    return (
      <li className={pathname === this.state.pathname ? 'active' : ''}>
        <Link>
          <a href={pathname}>{title}</a>
        </Link>
        <style jsx>{`
            a {
              font-weight: ${design.fonts.boldWeight};
            }
          `}</style>
      </li>
    );
  }
}


HeaderLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


HeaderLink.defaultProps = {};


HeaderLink.propDescription = [
  {
    name: 'pathname',
    type: 'String',
    required: true,
    default: 'n/a',
    desc: 'Pathname for this link'
  },
  {
    name: 'title',
    type: 'String',
    required: true,
    default: 'n/a',
    desc: 'Title of the link',
  },
];


export default HeaderLink;
