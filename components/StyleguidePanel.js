// Module imports
import React from 'react';
import PropTypes from 'prop-types';


// Component imports
import StyleguidePropTable from './StyleguidePropTable';
import Subtitle from './Subtitle';

const StyleguidePanel = ({ children, name, propArray }) => (
  <div className="panel panel-default container-fluid">
    <Subtitle subtitle={name} />
    <div className="row">
      <div className="col-md-6">
        <StyleguidePropTable propArray={propArray} />
      </div>
      <div className="col-md-6 hl-flex hl-flex-justifyContentBetween hl-flex-alignItemsCenter">
        {children}
      </div>
    </div>
  </div>
);

StyleguidePanel.propTypes = {
  children: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  propArray: PropTypes.array.isRequired,
};

export default StyleguidePanel;
