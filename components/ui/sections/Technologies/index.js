import React from 'react'
import LinkButton from '../../interactions/LinkButton'
import Col from '../../grid/Col'

export default () => (
  <div
    className="container-fluid"
    id="technologies-section"
  >
    <div className="spacer-vertical" />
    <div className="row">
      <Col col={5} offset={1}>
        <div className="spacer-vertical" />
        <h3>Fast, reliable apps using the best tech.</h3>
        <h5>
          We’re experts in Ruby on Rails, Node, React, and React Native.
        </h5>
        <h5>
          We stick with these four technologies to help us build lightning fast for iOS, Android, and the web.
        </h5>
        <div className="spacer-vertical" />
        <div className="spacer-vertical" />
        <LinkButton
          title="Let's Talk Tech"
          link="tel:8475252033"
          type="info"
        />
      </Col>
      <Col col={6} offset={0}>
        <div className="row spacer-vertical">
          <Col col={4} offset={0} center>
            <i
              className={`devicon-rails-plain colored tech-icon`}
            />
          </Col>
          <Col col={4} offset={0} center>
            <i
              className={`devicon-nodejs-plain colored tech-icon`}
            />
          </Col>
          <Col col={4} offset={0} center>
            <i
              className={`devicon-react-original colored tech-icon`}
            />
          </Col>
        </div>
      </Col>
    </div>
    <style jsx>{`
      #technologies-section {
        min-height: 400px;
        padding-top: 50px;
      }
      #layered-prototype-image {
        margin-top: 50px;
        height: 150px;
      }
      i {
        margin-top: 20px;
      }
    `}</style>
  </div>
)
