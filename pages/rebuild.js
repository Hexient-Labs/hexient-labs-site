import React, { Component } from 'react'
import trackGaView from '../lib/trackGaView'
import withStyleLib from '../hocs/withStyleLib'

// Sections
import Hero from '../components/ui/sections/Hero'

class Rebuild extends Component {
  componentDidMount() {
    trackGaView()
  }

  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default withStyleLib(Rebuild)
