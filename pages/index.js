// Component imports
import React, { Component } from 'react';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import MobileDevelopmentSection from '../components/MobileDevelopmentSection';
import PartnershipSection from '../components/PartnershipSection';

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
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(Index);
