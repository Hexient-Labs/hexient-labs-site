// Constant imports
import design from '../constants/design';

export default () => (
  <div id="main-section">
    <div className="container-fluid text-center margin-top-10pct">
      <div className="col-md-6 col-md-offset-3">
        <h1 className="white">Hexient Labs</h1>
        <h2 className="white">Your full-stack development partner.</h2>
      </div>
    </div>
    <div className="container-fluid margin-top-10pct">
      <div className="col-md-4 col-md-offset-1 text-center">
        <i className="fa fa-mobile white" />
        <h3 className="white">Design, prototype, develop.<br />We turn dreams into beautiful apps for iOS and Android.</h3>
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-4 text-center">
        <br className="hidden-md hidden-lg" />
        <i className="fa fa-desktop white" />
        <h3 className="white">Intuitive and useful.<br />We use web technology to deliver value with incredible speed.</h3>
      </div>
    </div>
    <style jsx>{`
      #main-section {
        background-image: url('/static/IPhone Blueprint@2x.png');
        min-height: 100vh;
        padding-top: 56px;
      }
      h1 {
        font-size: 5em;
      }
      .fa {
        font-size: 5em;
      }
    `}</style>
  </div>
);
