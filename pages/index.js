// Component imports
import withStyleLib from '../hocs/withStyleLib';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainSection from '../components/index/MainSection'
;
const Index = () => (
  <div>
    <Header/>
    <MainSection />
    <Footer/>
  </div>
);

export default withStyleLib(Index);
