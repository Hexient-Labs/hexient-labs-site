import React from 'react'
import Icon from '../../typography/Icon'
import LinkButton from '../../interactions/LinkButton'
import Row from '../../grid/Row'

export default () => (
  <div
    className="container-fluid"
    id="hero-section"
  >
    <div className="row text-right">
      <img
        id="top-logo"
        src="../../../../static/HexientLabs-Logo.png"
        alt="Hexient Labs"
      />
    </div>
    <div className="spacer-vertical" />
    <Row col={5} offset={1}>
      <h3 className="white bold">We Practice Growth-Driven Development.</h3>
    </Row>
    <Row col={5} offset={1}>
      <h4 className="white">
        3 of our clients have raised more than $1M in funding from top VC firms since July 2017.
      </h4>
    </Row>
    <Row col={5} offset={1}>
      <h4 className="white">
        We don't code just to code. We're always focused on your business goals and use technology to achieve them.
      </h4>
    </Row>
    <div className="spacer-vertical" />
    <Row col={5} offset={1}>
      <Icon name="apple" color="white" />
      <Icon name="android" color="white" />
      <Icon name="desktop" color="white" />
    </Row>
    <div className="spacer-vertical" />
    <div className="spacer-vertical" />
    <Row col={5} offset={1}>
      <LinkButton
        title="Call Us To Talk"
        link="tel:8475252033"
        type="success"
      />
    </Row>
    <style jsx>{`
      #hero-section {
        background-image: url('../../../../static/background.png');
        min-height: 708px;
      }
      #top-logo {
        height: 40px;
        margin: 20px;
      }
    `}</style>
  </div>
)
