// Module imports
import React from 'react';

// Component imports
import PartnerView from '../PartnerView';
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="Projects" />
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-3">
        <PartnerView
          featureArray={[
            'Real-Time Asset Dispatching',
            'Push Notifications',
            'Location-Tracking',
          ]}
          logoPath={"../static/Thumbster_Logo.png"}
          name="Thumbster"
        />
      </div>
      <div className="col-md-3">
        <PartnerView
          featureArray={[
            'Management & Analytics Portal',
            'Single-Click Payments',
            'Surge Pricing System',
          ]}
          logoPath={"../static/LoadUp_Logo.png"}
          name="LoadUp"
        />
      </div>
      <div className="col-md-3">
        <PartnerView
          featureArray={[
            'Interactive Visualizations',
            'Graphical Data Explorer',
            'Drop-In Widget',

          ]}
          logoPath={"../static/Emcien_Logo.png"}
          name="Emcien"
        />
      </div>
      <div className="col-md-3">
        <PartnerView
          featureArray={[
            'Image Recognition',
            'Recommendation System',
            'Social Sharing',
          ]}
          logoPath={"../static/Clozette_Logo.png"}
          name="Clozette"
        />
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
        background-color: ${design.colors.lightgray};
        min-height: 70vh;
      }
      h3 {
        font-weight: ${design.fonts.lightWeight};
      }
    `}</style>
  </div>
);
