// Module imports
import React from 'react';

import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <div className="fullscreen-bg hidden-xs hidden-sm">
      <video
        loop
        muted
        autoPlay
        className="fullscreen-bg__video"
        src="../../static/keyboard.mp4"
      />
    </div>
    <div className="container-fluid text-center">
      <h2 className="margin-top-5pct scroll-reveal text-center">
        10+ years developing web and mobile apps.
      </h2>
      <div className="hidden-md hidden-lg margin-top-20pct margin-bottom-20pct" />
      <br />
      <h3 className="scroll-reveal text-center">
        We don't hire product managers.<br />You're working directly with developers and designers.
      </h3>
      <div className="hidden-md hidden-lg margin-top-20pct margin-bottom-20pct" />
      <div className="col-md-2 col-md-offset-3 margin-top-5pct margin-bottom-5pct scroll-reveal text-left">
        <img
          src="../../static/Riaz.png"
          alt="Riaz Virani"
          className="img img-responsive"
        />
      </div>
      <div className="col-md-2" />
      <div className="col-md-2 margin-top-5pct margin-bottom-5pct scroll-reveal text-right">
        <img
          src="../../static/Mitch.png"
          alt="Mitch Masia"
          className="img img-responsive"
        />
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        background-color: rgba(247, 247, 247, 0.95);
      }
      h3 {
        font-weight: 300;
        font-size: 3rem;
        line-height: 1.25;
      }
      .fullscreen-bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        z-index: -100;
      }
      .fullscreen-bg__video {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        height: auto;
        min-width: 100%;
        min-height: 100%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
	      transform: translate(-50%, -50%);
      }
    `}</style>
  </div>
);
