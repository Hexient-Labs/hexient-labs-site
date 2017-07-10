// Module imports
import React from 'react';
import 'babel-polyfill';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <div className="container-fluid margin-top-10pct">
      <div className="col-md-8 col-md-offset-2 text-center">
        <h1>Full-stack dev partner</h1>
        <br />
        <h3>
        </h3>
        <h2>
          <TypistLoop
            interval={2500}
          >
            {[
              'Amazing apps for awesome brands',
              'Helping entrepreneurs meet their goals',
              'Turning ideas into reality',
              'Building something from nothing',
              'Making technology transparent',
              'Delivering more than we promise',
            ].map(text => (
              <Typist
                key={text}
                startDelay={1000}
                cursor={{
                  show: true,
                  blink: true,
                  element: '|',
                  hideWhenDone: false,
                }}
              >
                {text}
              </Typist>
            ))}
          </TypistLoop>

        </h2>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        padding-top: 80px;
        background-image: url('../../static/background-white.png');
        min-height: 75vh;
      }
      h3 {
        font-weight: ${design.fonts.lightWeight};
      }
    `}</style>
  </div>
);
