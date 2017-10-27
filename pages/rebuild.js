import React, { Component } from 'react'
import trackGaView from '../lib/trackGaView'
import withStyleLib from '../hocs/withStyleLib'

// Sections
import Hero from '../components/ui/sections/Hero'
import Prototypes from '../components/ui/sections/Prototypes'
import Clients from '../components/ui/sections/Clients'
import CrossPlatform from '../components/ui/sections/CrossPlatform'

// Components
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
      </div>
    );
  }
}

export default withStyleLib(Rebuild)
