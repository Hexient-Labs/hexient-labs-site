// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Simple" />
    <div className="container-fluid">
      <div className="col-md-6 col-md-offset-3 scroll-reveal text-center">
        <h4>
          There's no signup or login, just plug in your email and you're good.
        </h4>
        <br />
        <h4>At Hexient Labs, we love developing awesome tools, mobile apps, and web apps. If you have a project and want some guidance, we'd love to talk!</h4>
        <br />
        <h5>HenceForm is totally open-source. Check out the <a href="https://github.com/Hexient-Labs/hence-form" target="_blank">GitHub Repo</a>.</h5>
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
