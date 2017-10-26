import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ col, children, offset }) => (
  <div className="row">
    <div
      className={`col-md-${col} ${offset ? `col-md-offset-${offset}` : ''}`}
    >
      {children}
    </div>
  </div>
)

Row.propTypes = {
  col: PropTypes.number.isRequired,
  children: PropTypes.any,
  offset: PropTypes.number.isRequired,
}

Row.defaultProps = {
  children: {},
}

export default Row
