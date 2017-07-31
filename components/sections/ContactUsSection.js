// Module imports
import React from 'react';

// Constant imports
import design from '../../constants/design';
import contact from '../../constants/contact';

export default () => (
  <div id="contact-us-section" className="container-fluid">
    <div className="container-fluid margin-top-5pct">
      <form
        action="https://henceform.hexientlabs.com/admin@hexientlabs.com"
        method="POST"
      >
        <h3>
          I'm looking for a &nbsp;
          <select className="form-control" name="app_type">
            <option value="mobile_app">mobile app</option>
            <option value="web_app">web app</option>
            <option value="both">mobile and web apps</option>
            <option value="not_sure">different sort of technology</option>
          </select>
          .
        </h3>
      </form>
    </div>
    <style jsx>{`
      .wrapper {
        background-color: ${design.colors.white};
      }
    `}</style>
  </div>
);
