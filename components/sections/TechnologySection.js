// Module imports
import React from 'react';

import design from '../../constants/design';

export default () => (
  <div className="container-fluid">
    <div className="container-fluid text-center">
      <h2 className="margin-top-5pct scroll-reveal text-center">
        Your app has to be fast, tested, and maintainable.
      </h2>
      <div className="hidden-md hidden-lg margin-top-20pct margin-bottom-20pct" />
      <br />
      <h3 className="scroll-reveal text-center">
        As senior engineers, we're not confined to one tech stack.<br />
        We choose the right tools for your business goals.
      </h3>
      <div className="hidden-md hidden-lg margin-top-20pct margin-bottom-20pct" />
      <div className="col-md-8 col-md-offset-2 margin-top-5pct margin-bottom-5pct scroll-reveal">
        <img
          src="../../static/Tools.png"
          alt="Startup Tools"
          className="img img-responsive"
        />
      </div>
    </div>
    <style jsx>{`
      .fa-heart {
        color: ${design.colors.pink};
      }
      .container-fluid {
        background-color: ${design.colors.white};
      }
      h3 {
        font-weight: 300;
        font-size: 3rem;
        line-height: 1.25;
      }
    `}</style>
  </div>
);
