// Component imports
import React, { Component } from 'react';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopSection from '../components/sections/TopSection';

class Index extends Component {
  componentDidMount() {
    window.sr = ScrollReveal();
    window.sr.reveal('.scroll-reveal');

    // new Cleave('.phone-input', {
    //   delimiters: ['+1', ' ', '(', ')',' ', '-'],
    //   blocks: [0, 0, 0, 3, 0, 3, 4],
    // });
  }

  render() {
    return (
      <div>
        <Header />
        <TopSection />
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(Index);
