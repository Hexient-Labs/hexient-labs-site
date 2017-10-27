import React from 'react'
import PropTypes from 'prop-types'

const ClientIcon = ({ name }) => (
  <i
    className={`devicon-${name} colored client-icon`}
  />
)

ClientIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ClientIcon
