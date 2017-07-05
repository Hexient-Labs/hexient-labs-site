// Component imports
import SectionTitle from './SectionTitle';


// Constant imports
import design from '../constants/design';


export default () => (
  <div>
    <div id="feature-list">
      <SectionTitle title="Common Features" />
      <div className="container-fluid margin-top-5pct">
        <div className="col-md-2 text-center">
          <i className="fa fa-instagram" />
          <h4>Social Login</h4>
        </div>
        <div className="col-md-2 text-center">
          <i className="fa fa-credit-card" />
          <h4>Payments</h4>
        </div>
        <div className="col-md-2 text-center">
          <i className="fa fa-cloud" />
          <h4>Cloud Services</h4>
        </div>
        <div className="col-md-2 text-center">
          <i className="fa fa-bell" />
          <h4>Notifications</h4>
        </div>
        <div className="col-md-2 text-center">
          <i className="fa fa-lock" />
          <h4>Admin Portals</h4>
        </div>
        <div className="col-md-2 text-center">
          <i className="fa fa-wrench" />
          <h4>Maintenance</h4>
        </div>
      </div>
    </div>
    <style jsx>{`
      #feature-list {
        background-color: ${design.colors.lightgray};
        padding-top: 50px;
        padding-bottom: 50px;
      }
      .fa {
        font-size: 5em;
        color: ${design.colors.primary};
      }
      h4 {
        color: ${design.colors.primary};
      }
    `}</style>
  </div>
);
