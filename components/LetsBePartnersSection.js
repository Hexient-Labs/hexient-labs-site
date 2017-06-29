// Component imports
import TextInput from './TextInput';
import Title from './Title';
import Subtitle from './Subtitle';


// Constant imports
import design from '../constants/design';

export default () => (
  <div className="section">
    <div className="container-fluid margin-top-5pct">
      <div className="col-md-6">
        <Title title="Let's Be Partners." />
        <Subtitle
          subtitle="You need a dev team you can trust."
        />
        <br /><br />
        <h3 id="partners-content">
          With bleeding-edge web technology we're able to iterate quickly and
          deliver new features week-after-week keeping your business on track.
        </h3>
      </div>
      <div className="col-md-6">
        <TextInput placeholder="Full Name*" onChange={() => {}} />
        <br />
        <TextInput placeholder="Email*" onChange={() => {}} />
        <br />
        <TextInput phone placeholder="Phone (999) 999-9999*" onChange={() => {}} />
        <br />
        <TextInput placeholder="Project Type" onChange={() => {}} />
        <br />
      </div>
    </div>
    <style jsx>{`
      .section {
        background-color: ${design.colors.primary};
        min-height: 65vh;
        padding-top: 56px;
      }
    `}</style>
  </div>
);
