import React from 'react'
import PropTypes from 'prop-types'

const ClientImage = ({ alt, src }) => (
  <a href={alt} target="_blank" rel="noopener noreferrer">
    <img
      src={src}
      alt={alt}
      className="img img-fluid"
    />
    <style jsx>{`
      img {
        height: 120px;
      }
    `}</style>
  </a>
)

ClientImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default ClientImage
