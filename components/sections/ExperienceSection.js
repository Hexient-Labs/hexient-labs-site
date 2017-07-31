// Module imports
import React from 'react';

import design from '../../constants/design';

export default () => (
  <div className="container-fluid">
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
      .fa-heart {
        color: ${design.colors.pink};
      }
      .container-fluid {
        background-color: ${design.colors.lightgray};
      }
      h3 {
        font-weight: 300;
        font-size: 3rem;
        line-height: 1.25;
      }
    `}</style>
  </div>
);
