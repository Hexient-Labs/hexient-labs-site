// Component imports
import React, { Component } from 'react';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import FeatureList from '../components/FeatureList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LetsBePartnersSection from '../components/LetsBePartnersSection';
import MainSection from '../components/MainSection';
import MobileDevelopmentSection from '../components/MobileDevelopmentSection';
import PartnershipSection from '../components/PartnershipSection';
import WebDevelopmentSection from '../components/WebDevelopmentSection';

class Index extends Component {
  constructor(props) {
    super(props);

    this.onScroll = () => {
      this.setState({
          opacity: window.pageYOffset / 862,
      });
    };
  }

  state = {
    opacity: 0,
  };

  componentDidMount() {
    window.sr = ScrollReveal();
    window.sr.reveal('.title');
    window.sr.reveal('.subtitle');
    window.sr.reveal('blockquote');
    window.sr.reveal('#partners-content');

    new Cleave('.phone-input', {
      delimiters: ['+1', ' ', '(', ')',' ', '-'],
      blocks: [0, 0, 0, 3, 0, 3, 4],
    });

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <div>
        <Header opacity={this.state.opacity} />
        <MainSection />
        <PartnershipSection />
        <MobileDevelopmentSection />
        <FeatureList />
        <WebDevelopmentSection />
        <LetsBePartnersSection />
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(Index);
