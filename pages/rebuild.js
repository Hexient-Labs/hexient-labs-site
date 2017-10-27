import React, { Component } from 'react'
import trackGaView from '../lib/trackGaView'
import withStyleLib from '../hocs/withStyleLib'

// Sections
import Hero from '../components/ui/sections/Hero'
import Prototypes from '../components/ui/sections/Prototypes'
import Clients from '../components/ui/sections/Clients'
import CrossPlatform from '../components/ui/sections/CrossPlatform'
import Technologies from '../components/ui/sections/Technologies'
import Talent from '../components/ui/sections/Talent'

// Components
import Col from '../components/ui/grid/Col'
import Row from '../components/ui/grid/Row'

class Rebuild extends Component {
  componentDidMount() {
    trackGaView()
  }

  render() {
    return (
      <div>
        <Hero />
        <Prototypes />
        <Row offset={3} col={6}>
          <hr />
        </Row>
        <Clients />
        <CrossPlatform />
        <Technologies />
        <Row offset={3} col={6}>
          <hr />
        </Row>
        <Talent />
        <Row offset={3} col={6}>
          <hr />
        </Row>
        <Row offset={3} col={6}>
          <Col col={10} offset={1} center>
            <h4 className="grey text-center">Let's talk! Call us at (847) 525-2033.</h4>
            <h6 className="text-center small">Copyright Hexient Labs, LLC. 2017</h6>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyleLib(Rebuild)
