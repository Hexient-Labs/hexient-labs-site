// Component imports
import React, { Component } from 'react';
import trackGaView from '../lib/trackGaView';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUsSection from '../components/sections/ContactUsSection';
import HenceFormConclusionSection from '../components/sections/HenceFormConclusionSection';
import HenceFormExampleSection from '../components/sections/HenceFormExampleSection';
import HenceFormMainSection from '../components/sections/HenceFormMainSection';
import HenceFormWhyUseThisSection from '../components/sections/HenceFormWhyUseThisSection';

class HenceForm extends Component {
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
        <HenceFormMainSection />
        <HenceFormWhyUseThisSection />
        <HenceFormExampleSection />
        <HenceFormConclusionSection />
        <ContactUsSection />
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(HenceForm);
