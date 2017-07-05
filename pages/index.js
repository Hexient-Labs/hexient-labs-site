// Component imports
import React, { Component } from 'react';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import FeatureList from '../components/FeatureList';
import Footer from '../components/Footer';
import Header from '../components/Header';


class Index extends Component {
  constructor(props) {
    super(props);

    // this.onScroll = () => {
    //   this.setState({
    //       opacity: window.pageYOffset / 862,
    //   });
    // };
  }

  state = {
    opacity: 0,
  };

  componentDidMount() {
    // window.sr = ScrollReveal();
    // window.sr.reveal('.title');
    // window.sr.reveal('.subtitle');
    // window.sr.reveal('blockquote');
    // window.sr.reveal('#partners-content');
    // window.sr.reveal('.btn-reveal');
    //
    // new Cleave('.phone-input', {
    //   delimiters: ['+1', ' ', '(', ')',' ', '-'],
    //   blocks: [0, 0, 0, 3, 0, 3, 4],
    // });
    //
    // window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <div>
        <Header />
        <FeatureList />
        <Footer/>
        <style>{`
          body {
            padding-top: 92px;
          }
        `}</style>
      </div>
    );
  }
}

export default withStyleLib(Index);
