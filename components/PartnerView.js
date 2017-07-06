// Module imports
import React from 'react';
import PropTypes from 'prop-types';


// Constant imports
import design from '../constants/design';


const PartnerView = ({ featureArray, logoPath }) => (
  <div className="container-fluid scroll-reveal wrapper text-center">
    <img src={logoPath} className="img img-responsive" />
    <br />
    {(() => featureArray.map(feature => <h6 key={feature}>{feature}</h6>))()}
    <style jsx>{`
      .wrapper {
        border-right: 3px solid ${design.colors.white};
      }
      h6 {
        color: ${design.colors.gray};
      }
      img {
        height: 50px;
        margin: auto;
      }
    `}</style>
  </div>
);


PartnerView.propTypes = {
  featureArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  logoPath: PropTypes.string.isRequired,
};


export default PartnerView;
