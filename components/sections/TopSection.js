import React from 'react';

import ServiceIcon from '../ServiceIcon';
import design from '../../constants/design';

export default () => (
  <div className="container-fluid text-center wrapper">
    <div className="margin-top-10pct" />
    <h1>
      Love your developers
      <i className="fa fa-heart" />
    </h1>
    <h3 id="explainer">
      It's hard to find developers you can trust.
    </h3>
    <h3>Our mission is to make sure you actually enjoy building software.</h3>
    <div className="container-fluid margin-top-10pct margin-bottom-5pct">
      <div className="col-md-3 text-center">
        <ServiceIcon title="Prototype" icon="clipboard" />
      </div>
      <div className="col-md-3 text-center">
        <ServiceIcon title="Web" icon="desktop" />
      </div>
      <div className="col-md-3 text-center">
        <ServiceIcon title="iOS" icon="apple" />
      </div>
      <div className="col-md-3 text-center">
        <ServiceIcon title="Android" icon="android" />
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        background-color: ${design.colors.white};
      }
      #explainer {
        margin-top: 30px;
      }
      .fa-heart {
        position: absolute;
        margin-left: 12px;
        margin-top: -15px;
        transform: rotate(40deg);
        color: ${design.colors.pink};
      }
      h1 {
        color: ${design.colors.blue};
      }
    `}</style>
  </div>
);
