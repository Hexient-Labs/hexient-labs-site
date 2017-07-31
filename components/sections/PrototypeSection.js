// Module imports
import React from 'react';

import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6 scroll-reveal">
        <h2 className="margin-top-15pct margin-bottom-15pct">
          Complete prototypes reduce development time and save you money.
          We build them for $500 flat.
        </h2>
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
      .wrapper {
        background-color: ${design.colors.white};
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
