// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Why Use Henceform" />
    <div className="container-fluid">
      <div className="col-md-6 col-md-offset-3 scroll-reveal text-center">
        <h2>ZERO CONFIG, ZERO PROBLEMS</h2>
        <br />
        <h4>
          If you've ever built a static website, you know submitting forms sucks.
        </h4>
        <h4>
          Between SMTP Servers and PHP files, it's harder than it should be.
        </h4>
        <h4>
          With Henceform, you just plug in our URL, and we handle the rest.
        </h4>
        <br />
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        padding-top: 30px;
        background-color: ${design.colors.white};
        min-height: 50vh;
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
