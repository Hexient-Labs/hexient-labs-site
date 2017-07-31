import React from 'react';

import Client from '../Client';
import design from '../../constants/design';


export default () => (
  <div className="container-fluid padding-top-5pct padding-bottom-5pct">
    <div className="col-md-2 text-center">
      <Client
        alt="Hexient Labs NewStory"
        imagePath="../../static/NewStory-Logo.png"
      />
    </div>
    <div className="col-md-2 text-center">
      <Client
        alt="Hexient Labs Thumbster Connect"
        imagePath="../../static/ThumbsterConnect-Logo.png"
      />
    </div>
    <div className="col-md-2 text-center">
      <Client
        alt="Hexient Labs LoadUp"
        imagePath="../../static/LoadUp-Logo.png"
      />
    </div>
    <div className="col-md-2 text-center">
      <Client
        alt="Hexient Labs TalkRise"
        imagePath="../../static/TalkRise-Logo.png"
      />
    </div>
    <div className="col-md-2 text-center">
      <Client
        alt="Hexient Labs Taskloop"
        imagePath="../../static/Taskloop-Logo.png"
      />
    </div>
    <style jsx>{`
      .container-fluid {
        background-color: ${design.colors.lightgray};
      }
    `}</style>
  </div>
);
