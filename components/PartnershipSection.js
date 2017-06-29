// Module imports

// Component imports
import Title from './Title';
import Subtitle from './Subtitle';


// Constant imports
import design from '../constants/design';

export default () => (
  <div className="section">
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6">
        <Title title="A Real Partnership" />
        <Subtitle
          subtitle="Our goal is to create long-lasting relationships that continue to deliver value over time."
        />
        <br /><br />
        <blockquote>
          We know your work isn't done when a web or mobile app is released- neither is ours.
          We'll <strong>design, build, test, and iterate</strong> to continuously improve your product.
        </blockquote>
        <blockquote>
          Daily communicate with partners assures our progress matches your vision.
        </blockquote>
      </div>
    </div>
    <style jsx>{`
      .section {
        background-color: ${design.colors.white};
        min-height: 65vh;
        padding-top: 56px;
      }
      .fa {
        font-size: 5em;
      }
    `}</style>
  </div>
);
