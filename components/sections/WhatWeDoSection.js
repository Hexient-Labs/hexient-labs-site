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
                We achieve beautiful design, emphasizing high-value features using realistic prototypes.
              </h5>
            </div>
          }
          title="Design & Prototype"
        >
          <i className="fa fa-pencil" />
        </LogoCard>
      </div>
      <div className="col-md-4 text-center">
        <LogoCard
          content={
            <div>
              <h5>
                We build beautiful, tested, reliable apps and iterate frequently for iOS, Android, and the web.
              </h5>
            </div>
          }
          title="Build & Iterate"
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
        padding-top: 70px;
        padding-bottom: 70px;
        background-color: ${design.colors.white};
        min-height: 70vh;
      }
      h5 {
        font-weight: ${design.fonts.lightWeight};
        line-height: 1.75;
      }
    `}</style>
  </div>
);
