// Module imports
import React from 'react';
import PropTypes from 'prop-types';


const StyleguidePropTable = ({ propArray }) => (
  <table className="table table-responsive table-striped table-bordered table-condensed">
    <thead>
      <tr>
        <td>Name</td>
        <td>Type</td>
        <td>Required</td>
        <td>Default</td>
        <td>Description</td>
      </tr>
    </thead>
    <tbody>
      {(() =>
        propArray.map(prop => (
          <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.required ? 'true' : 'false'}</td>
            <td>{prop.default === true ? 'true' : (!prop.default ? 'false' : 'n/a')}</td>
            <td>{prop.desc}</td>
          </tr>
        ))
      )()}
    </tbody>
  </table>
);

StyleguidePropTable.propTypes = {
  propArray: PropTypes.array.isRequired,
};

export default StyleguidePropTable;
