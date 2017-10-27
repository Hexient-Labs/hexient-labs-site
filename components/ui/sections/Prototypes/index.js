import React from 'react'
import LinkButton from '../../interactions/LinkButton'
import Col from '../../grid/Col'

export default () => (
  <div
    className="container-fluid"
    id="prototypes-section"
  >
    <div className="spacer-vertical" />
    <div className="row">
      <Col col={5} offset={1}>
        <div className="spacer-vertical" />
        <h3>Interactive Prototypes</h3>
        <h5>We start every project with high-fidelity prototypes.</h5>
        <h5>
          Prototyping helps us validate your business and make sure we're on the same page about what we're building- saving you time and money.
        </h5>
        <div className="spacer-vertical" />
        <div className="spacer-vertical" />
        <LinkButton
          title="Book a Whole Day for $500 Flat."
          link="tel:8475252033"
          type="info"
        />
      </Col>
      <Col col={5} offset={1}>
        <img
          id="layered-prototype-image"
          src="../../../static/layered_prototype.png"
          alt="Hexient Prototypes"
          className="img-fluid"
        />
      </Col>
    </div>
    <style jsx>{`
      #prototypes-section {
        min-height: 400px;
        padding-top: 50px;
      }
      #layered-prototype-image {
        margin-top: 50px;
        height: 150px;
      }
    `}</style>
  </div>
)
