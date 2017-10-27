import React from 'react'
import Row from '../../grid/Row'
import Col from '../../grid/Col'

export default () => (
  <div
    className="container-fluid text-center"
    id="cross-platform-section"
  >
    <div className="spacer-vertical" />
    <Row col={10} offset={1}>
      <Col col={10} offset={1} center>
        <h2 className="white">Your goal is growth.</h2>
        <h4 className="white">Don't limit yourself and your business to a single platform.</h4>
        <h4 className="white">We're cross-platform, lightning fast, code-reuse ninjas.</h4>
      </Col>
    </Row>
    <div className="spacer-vertical" />
    <div className="row">
      <Col offset={1} col={4}>
        <img
          src="../../../../static/clients/ThumbsterConnect_Mobile_All_Clients.png"
          alt="Thumbster Connect All Clients"
          className="img img-fluid img-responsive"
        />
      </Col>
      <Col offset={1} col={5}>
        <img
          src="../../../../static/clients/Growth Graph.png"
          alt="Hexient Labs Growth"
          className="img img-fluid img-responsive"
        />
      </Col>
    </div>
    <style jsx>{`
      #cross-platform-section {
        background-image: url('../../../../static/cross-platform-background.png');
        min-height: 500px;
        padding-bottom: 30px;
      }
    `}</style>
  </div>
)
