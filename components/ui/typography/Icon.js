import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ color, name, size }) => (
  <i
    aria-hidden="true"
    className={`fa fa-${name} white`}
    style={{
      marginRight: '40px',
      fontSize: '5rem',
    }}
  />
)

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}

Icon.defaultProps = {
  color: 'white',
  size: 1,
}

export default Icon
