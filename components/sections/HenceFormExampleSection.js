// Module imports
import React from 'react';

// Component imports
import HenceformStep from '../HenceformStep';
import SectionTitle from '../SectionTitle';

// Constant imports
import design from '../../constants/design';

export default () => (
  <div className="container-fluid wrapper">
    <SectionTitle title="How?" />
    <div className="container-fluid">
      <div className="col-md-6 col-md-offset-3 text-center">
        <HenceformStep
          description={`Add an action to your form & include your email.`}
          title="Step 1"
        >
          <div className="text-left">
            <code className="text-left">&lt;form action="https://henceform.hexientlabs.com/YOUR_EMAIL_HERE" method="post"&gt;<br />&lt;/form&gt;
            </code>
          </div>
        </HenceformStep>
        <HenceformStep
          description={`Add names to your form inputs.`}
          title="Step 2"
        >
          <div className="text-left">
            <code className="text-left">&lt;form action="https://henceform.hexientlabs.com/YOUR_EMAIL_HERE" method="post"&gt;<br />&nbsp;&nbsp;&lt;input name="full_name" type="text" /&gt;<br />&nbsp;&nbsp;&lt;input name="email" type="text" /&gt;<br />&nbsp;&nbsp;&lt;input name="phone" type="text" /&gt;<br />&nbsp;&nbsp;&lt;button type="submit"&gt;Submit&lt;/button&gt;<br />&lt;/form&gt;
            </code>
          </div>
        </HenceformStep>
        <br /><br /><br />
        <HenceformStep
          description="Submit your form! You'll get an email with the input data!"
          title="Step 3"
        >
          <div className="container-fluid">
            <div className="col-md-6 text-center">
              <h3>Form on your site.</h3>
              <br />
              <img
                src="../../static/Henceform Form.png"
                alt="Henceform"
                className="img img-responsive"
              />
            </div>
            <div className="col-md-6 text-center">
              <h3>Email in your inbox.</h3>
              <br />
              <img
                src="../../static/Henceform Response.png"
                alt="Henceform"
                className="img img-responsive"
              />
            </div>
          </div>
        </HenceformStep>
        <br /><br />
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: ${design.colors.white};
        min-height: 50vh;
      }
      h2 {
        color: ${design.colors.primary};
      }
      h3 {
        font-weight: ${design.fonts.lightWeight};
      }
      img {
        height: 300px;
      }
    `}</style>
  </div>
);
