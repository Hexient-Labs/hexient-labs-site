// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Why Choose Us" />
    <div className="container-fluid">
      <div className="col-md-6 col-md-offset-3 scroll-reveal text-center">
        <h2>A Real Partnership</h2>
        <br />
        <h4>
          We aim to create relationships that deliver lasting value.
        </h4>
        <br />
        <h4>Your work isn’t done when a web or mobile app is released- neither is ours. We’ll design, build, test, and iterate together to improve your product.
        </h4>
        <br />
        <h4>
          We communicate with our partners daily to assure our progress matches your vision.
        </h4>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: ${design.colors.white};
        min-height: 70vh;
      }
      h2 {
        color: ${design.colors.primary};
      }
      h3 {
        font-weight: ${design.fonts.lightWeight};
      }
    `}</style>
  </div>
);
