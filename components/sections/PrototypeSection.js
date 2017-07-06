// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Prototypes" />
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6 scroll-reveal">
        <h2 className="title">Prototypes Save Time</h2>
        <br />
        <h5>Realistic prototypes may seem like wasted time, but they actually reveal feature requirements, UI patterns, and the overall vision for your product.</h5>
        <br />
        <h5>We work with our clients to create wireframes and high-resolution prototypes of their apps to ensure we're all on the same page when it's time for development.</h5>
      </div>
      <div className="col-md-6 text-center">
        <div className="video-wrapper">
          <video
            autoPlay
            loop
          >
            <source
              src="../../static/Exploding Prototype Rendered.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
    <style jsx>{`
      .title {
        color: ${design.colors.primary};
      }
      .wrapper {
        padding-top: 70px;
        padding-bottom: 70px;
        background-color: ${design.colors.white};
        min-height: 70vh;
      }
      video {
        width: 90%;
        margin: auto;
        background-color: transparent;
      }
      .video-wrapper {
        background-color: transparent;
      }
    `}</style>
  </div>
);
