// Module imports

// Component imports
import Title from './Title';
import Subtitle from './Subtitle';


// Constant imports
import design from '../constants/design';

export default () => (
  <div className="section">
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6">
        <Title title="Mobile Development" />
        <Subtitle
          subtitle="Simplicity and responsiveness are the cornerstones of a great app."
        />
        <br /><br />
        <blockquote>
          We follow a highly-structured approach to development with weekly demos, prioritization,
          and sprint planning to make sure we deliver apps on time, with the right functionality.
        </blockquote>
      </div>
    </div>
    <style jsx>{`
      .section {
        background-color: ${design.colors.greyLight};
        min-height: 65vh;
        padding-top: 56px;
      }
      .fa {
        font-size: 5em;
      }
    `}</style>
  </div>
);
