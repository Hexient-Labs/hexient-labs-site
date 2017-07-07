// Module imports
import React from 'react';

// Component imports
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div id="contact-us-section" className="container-fluid wrapper">
    <SectionTitle title="Contact" />
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6">
        <h2 className="title">Let's be partners</h2>
        <br />
        <h5>Whether you want a prototype, MVP, or more full-featured app, you need a development team you can trust. We only hire senior engineers, and only create quality products.
        </h5>
        <br />
        <h2><a href="tel:8556744172">(855) 674-4172</a></h2>
        <br /><br />
      </div>
      <div className="col-md-4 col-md-offset-1 text-center">
        <form
          action="https://henceform.hexientlabs.com/mmasia@hexientlabs.com"
          method="post"
        >
          <input
            className="form-control input-lg"
            type="text"
            placeholder="Full Name"
            name="full_name"
          />
          <br />
          <input
            className="form-control input-lg"
            type="text"
            placeholder="Email"
            name="email"
          />
          <br />
          <input
            className="form-control input-lg phone-input"
            type="text"
            placeholder="Phone"
            name="phone"
          />
          <br />
          <select
            className="form-control input-lg"
            placeholder="Project Type"
            name="project_type"
          >
            <option value="mobile_app">Mobile App (iOS and Android)</option>
            <option value="web_app">Web App</option>
            <option value="both">Both</option>
            <option value="not_sure">Not Sure</option>
          </select>
          <br />
          <button
            type="submit"
            className="btn btn-lg btn-default btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <style jsx>{`
      .title {
        color: ${design.colors.primary};
      }
      .wrapper {
        padding-top: 70px;
        padding-bottom: 70px;
        background-color: ${design.colors.white};
        min-height: 70vh;
      }
      img {
        width: 80%;
        margin: auto;
      }
    `}</style>
  </div>
);
