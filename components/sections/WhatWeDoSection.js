// Module imports
import React from 'react';

// Component imports
import LogoCard from '../LogoCard';
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="What We Do" />
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-4 col-md-offset-2 text-center">
        <LogoCard
          content={
            <div>
              <h5>
                The cornerstones of a great app are simplicity and usefulness.
              </h5>
              <h5>
                We design, build, and iterate quickly, focusing on high-value features.
              </h5>
            </div>
          }
          title="Prototype and Repeat"
        >
          <i className="fa fa-pencil" />
        </LogoCard>
      </div>
      <div className="col-md-4 text-center">
        <LogoCard
          content={
            <div>
              <h5>
                The cornerstones of a great app are simplicity and usefulness.
              </h5>
              <h5>
                We design, build, and iterate quickly, focusing on high-value features.
              </h5>
            </div>
          }
          title="Build and Communicate"
        >
          <i className="fa fa-code" />
        </LogoCard>
      </div>
    </div>
    <style jsx>{`
      .card-title {
        font-weight: ${design.fonts.boldWeight};
        color: ${design.colors.primary};
      }
      .fa {
        font-size: 8rem;
      }
      .wrapper {
        padding-top: 80px;
        padding-bottom: 30px;
        background-color: ${design.colors.white};
        min-height: 70vh;
      }
      h3 {
        font-weight: ${design.fonts.lightWeight};
      }
    `}</style>
  </div>
);
