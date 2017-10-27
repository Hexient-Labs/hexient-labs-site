// Component imports
import React, { Component } from 'react';
import trackGaView from '../lib/trackGaView';

// Component imports
import withStyleLib from '../hocs/withStyleLib';
import BlogSection from '../components/sections/BlogSection';
import ClientsSection from '../components/sections/ClientsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrototypeSection from '../components/sections/PrototypeSection';
import StartupSection from '../components/sections/StartupSection';
import TechnologySection from '../components/sections/TechnologySection';
import TopSection from '../components/sections/TopSection';


class Index extends Component {
  componentDidMount() {
    trackGaView();
  }

  render() {
    return (
      <div>
        <Header />
        <TopSection />
        <ClientsSection />
        <PrototypeSection />
        <StartupSection />
        <BlogSection />
        <TechnologySection />
        <ExperienceSection />
        <Footer/>
      </div>
    );
  }
}

export default withStyleLib(Index);
