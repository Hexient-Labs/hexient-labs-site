// Component imports
import React, { Component } from 'react';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUsSection from '../components/sections/ContactUsSection';
import HenceformConclusionSection from '../components/sections/HenceformConclusionSection';
import HenceformExampleSection from '../components/sections/HenceFormExampleSection';
import HenceformMainSection from '../components/sections/HenceformMainSection';
import HenceformWhyUseThisSection from '../components/sections/HenceformWhyUseThisSection';

class Henceform extends Component {
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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { opacity } = this.state;
    return (
      <div>
        <Header opacity={opacity} />
        <HenceformMainSection />
        <HenceformWhyUseThisSection />
        <HenceformExampleSection />
        <HenceformConclusionSection />
        <ContactUsSection />
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(Henceform);
