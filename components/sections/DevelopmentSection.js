// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Development" />
    <div className="fullscreen-bg">
      <video
        loop
        muted
        autoPlay
        className="fullscreen-bg__video"
        src="../../static/keyboard.mp4"
      />
    </div>
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6 col-md-offset-3 text-center scroll-reveal">
        <h2 className="title">Demo-Driven Development</h2>
        <br />
        <h5>We communicate with our clients daily. You should never be surprised about the state of your app. We demo weekly to make sure our work exceeds your expectations.</h5>
        <br />
        <h5>We build everyday using <em>bleeding-edge</em> tech. We practice test-driven development with React Native, and host our APIs and databases with leading cloud providers for secure, resilient performance.</h5>
      </div>
    </div>
    <style jsx>{`
      .title {
        color: ${design.colors.primary};
      }
      .wrapper {
        padding-top: 70px;
        padding-bottom: 70px;
        background-color: rgba(247, 247, 247, 0.95);
        min-height: 70vh;
      }
      img {
        width: 80%;
        margin: auto;
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
      @media (max-width: 767px) {
        .fullscreen-bg {
          background: url('http://dev2.slicejack.com/fullscreen-video-demo/img/videoframe.jpg') center center / cover no-repeat;
      }
      .fullscreen-bg__video {
        display: none;
      }
    }
    `}</style>
  </div>
);
