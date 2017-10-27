import React from 'react'
import Col from '../../grid/Col'
import Row from '../../grid/Row'

export default () => (
  <div
    className="container-fluid"
    id="talent-section"
  >
    <Row col={6} offset={3}>
      <h3 className="text-center">Superb Developers Only</h3>
      <h5 className="text-center">We don't hire Product Managers or Salespeople. You're always working with senior, awesome developers. See for yourself.</h5>
    </Row>
    <div className="spacer-vertical" />
    <div className="row">
      <Col center col={4} offset={0}>
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/d1upI3mwfNY"
          frameBorder="0"
        />
      </Col>
      <Col center col={4} offset={0}>
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/kC12enYIBKE"
          frameBorder="0"
        />
      </Col>
      <Col center col={4} offset={0}>
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/hVOBpPHswCQ"
          frameBorder="0"
        />
      </Col>
    </div>
    <style jsx>{`
      #talent-section {
        min-height: 400px;
        padding-bottom: 50px;
      }
      iframe {
        margin-top: 20px;
      }
    `}</style>
  </div>
)
