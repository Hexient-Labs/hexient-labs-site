// Module imports
import React from 'react';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <div className="container-fluid margin-top-10pct">
      <div className="col-md-8 col-md-offset-2 text-center">
        <h1>Henceform</h1>
        <br />
        <h3>
          Open-source, zero config, totally free form submissions.
        </h3>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        padding-top: 80px;
        background-image: url('../../static/Envelope Background.png');
        background-size: cover;
        min-height: 75vh;
      }
      h3 {
        font-weight: ${design.fonts.lightWeight};
      }
    `}</style>
  </div>
);
