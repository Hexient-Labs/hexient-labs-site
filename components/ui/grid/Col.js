import React from 'react'
import PropTypes from 'prop-types'

const Col = ({ center, col, children, offset }) => (
  <div
    className={`col-md-${col} ${offset ? `col-md-offset-${offset}` : ''} ${center ? 'text-center' : ''}`}
  >
    {children}
  </div>
)

Col.propTypes = {
  center: PropTypes.bool,
  col: PropTypes.number.isRequired,
  children: PropTypes.any,
  offset: PropTypes.number.isRequired,
}

Col.defaultProps = {
  center: false,
  children: {},
}

export default Col
