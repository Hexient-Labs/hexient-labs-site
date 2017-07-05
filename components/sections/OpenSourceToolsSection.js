// Module imports
import React from 'react';

// Component imports
import LogoCard from '../LogoCard';
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Open-Source Tools" />
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-4 text-center">
        <LogoCard
          content="Automagically forward your 'Contact Us' form responses to your email. Zero coding required."
          title="HenceForm"
        >
          <i className="fa fa-wpforms" />
        </LogoCard>
      </div>
      <div className="col-md-4 text-center">
        <LogoCard
          content="Manage your wardrobe, save your favorite outfits, and get customized shopping suggestions."
          title="Clozette"
        >
          <i className="fa fa-suitcase" />
        </LogoCard>
      </div>
      <div className="col-md-4 text-center">
        <LogoCard
          content="Manage your calories without the nonsense. View historical data and track your progress toward your beach-body."
          title="Just Calories"
        >
          <i className="fa fa-cutlery" />
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
