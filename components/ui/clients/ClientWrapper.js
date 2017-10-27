import React from 'react'
import PropTypes from 'prop-types'
import Row from '../grid/Row'
import ClientImage from './ClientImage'
import ClientFeatures from './ClientFeatures'
import ClientIcon from './ClientIcon'

const ClientWrapper = ({ features, imageSrc, link, technologies, title }) => (
  <div className="text-center spacer-vertical">
    <Row offset={1} col={10}>
      <ClientImage
        alt={link}
        src={imageSrc}
      />
      <h4>{title}</h4>
      <ClientFeatures features={features} />
      {/*<Row offset={1} col={10}>*/}
        {/*{technologies.map(technology => <ClientIcon name={technology} />)}*/}
      {/*</Row>*/}
    </Row>
  </div>
)

ClientWrapper.propTypes = {
  features: PropTypes.array.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
  technologies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

ClientWrapper.defaultProps = {
  link: 'https://hexientlabs.com',
}

export default ClientWrapper
