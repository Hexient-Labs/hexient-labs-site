import React from 'react'
import PropTypes from 'prop-types'

const ClientImage = ({ alt, src }) => (
  <a href={alt}>
    <img
      src={src}
      alt={alt}
      className="img-fluid"
    />
    <style jsx>{`
      img {
        height: 150px;
      }
    `}</style>
  </a>
)

ClientImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default ClientImage
