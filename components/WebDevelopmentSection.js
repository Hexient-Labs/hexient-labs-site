// Module imports

// Component imports
import FeatureList from './FeatureList';
import Title from './Title';
import Subtitle from './Subtitle';


// Constant imports
import design from '../constants/design';

export default () => (
  <div className="section">
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6">
        <Title title="Growth-Based Web Development" />
        <Subtitle
          subtitle="The web is the world's easiest platform to deliver value to customers."
        />
        <br /><br />
        <blockquote>
          We've built everything from logistics software to social networks. With bleeding-edge web technology
          we're able to iterate quickly and deliver new features week-after-week.
        </blockquote>
      </div>
    </div>
    <style jsx>{`
      .section {
        background-image: url('/static/Growth Graph.png');
        background-color: ${design.colors.white};
        background-repeat: no-repeat;
        background-position: right bottom;
        min-height: 65vh;
        padding-top: 56px;
      }
    `}</style>
  </div>
);
