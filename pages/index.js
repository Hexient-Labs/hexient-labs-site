// Component imports
import React, { Component } from 'react';
import trackGaView from '../lib/trackGaView';

// Component imports
import withStyleLib from '../hocs/withStyleLib';
import FeatureList from '../components/FeatureList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUsSection from '../components/sections/ContactUsSection';
import DevelopmentSection from '../components/sections/DevelopmentSection';
import MainSection from '../components/sections/MainSection';
import OpenSourceToolsSection from '../components/sections/OpenSourceToolsSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import PrototypeSection from '../components/sections/PrototypeSection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import WhyHexientLabsSection from '../components/sections/WhyHexientLabsSection';

class Index extends Component {
  constructor(props) {
    super(props);

    this.onScroll = () => {
      this.setState({
          opacity: window.pageYOffset / window.innerHeight,
      });
    };
  }

  state = {
    opacity: 0,
  };

  componentDidMount() {
    window.sr = ScrollReveal();
    window.sr.reveal('.scroll-reveal');

    new Cleave('.phone-input', {
      delimiters: ['+1', ' ', '(', ')',' ', '-'],
      blocks: [0, 0, 0, 3, 0, 3, 4],
    });

    window.addEventListener('scroll', this.onScroll);

    trackGaView();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { opacity } = this.state;
    return (
      <div>
        <Header opacity={opacity} />
        <MainSection />
        <WhatWeDoSection />
        <PortfolioSection />
        <PrototypeSection />
        <DevelopmentSection />
        <WhyHexientLabsSection />
        <OpenSourceToolsSection />
        <FeatureList />
        <ContactUsSection />
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(Index);
