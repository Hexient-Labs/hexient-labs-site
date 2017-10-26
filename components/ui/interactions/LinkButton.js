import React from 'react'
import PropTypes from 'prop-types'

const LinkButton = ({ link, title, type }) => (
  <a
    href={link}
    className={`btn btn-${type}`}
  >
    {title}
  </a>
)

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
}

LinkButton.defaultProps = {
  type: 'primary',
}

export default LinkButton
