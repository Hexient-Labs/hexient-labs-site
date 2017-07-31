// Module imports
import React from 'react';

import design from '../../constants/design';

export default () => (
  <div className="container-fluid">
    <div className="container-fluid margin-top-5pct margin-bottom-5pct">
      <div className="col-md-6 scroll-reveal">
        <h2 className="margin-top-10pct margin-bottom-15pct">
          We <i className="fa fa-heart" /> startups. We're nerds who love helping entrepreneurs achieve the right balance of time, money, and features.
        </h2>
      </div>
      <div className="col-md-6 text-right">
        <img
          src="../../static/Features.png"
          alt="Startup MVP App"
          className="img img-responsive"
        />
      </div>
    </div>
    <style jsx>{`
      .fa-heart {
        color: ${design.colors.pink};
      }
      .container-fluid {
        background-color: ${design.colors.lightgray};
      }
      .img {
        height: 350px;
        margin-left: auto;
        margin-right: auto;
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
