import React from 'react'
import PropTypes from 'prop-types'

const ClientFeatures = ({ features }) => (
  <h6 className="small light-grey">
    {features.map((feature, index) => (
      `${index === 0 ? '' : ' - '} ${feature}`
    ))}
  </h6>
)

ClientFeatures.propTypes = {
  features: PropTypes.array.isRequired,
}

export default ClientFeatures
