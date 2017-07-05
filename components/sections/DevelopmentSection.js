// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Development" />
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6">
        <h2 className="title">Demo-Driven Development</h2>
        <br />
        <h5>We communicate with our clients daily. You should never be surprised about the state of your app. We demo weekly to make sure our work exceeds your expectations.</h5>
        <br />
        <h5>We build everyday using <em>bleeding-edge</em> tech. We practice test-driven development with React Native, and host our APIs and databases with leading cloud providers for secure, resilient performance.</h5>
      </div>
      <div className="col-md-6">
        <img
          src="../static/React Native.png"
          alt="Prototype"
          className="img img-responsive"
        />
      </div>
    </div>
    <style jsx>{`
      .title {
        color: ${design.colors.primary};
      }
      .wrapper {
        padding-top: 70px;
        padding-bottom: 70px;
        background-color: ${design.colors.lightgray};
        min-height: 70vh;
      }
      img {
        width: 80%;
        margin: auto;
      }
    `}</style>
  </div>
);
