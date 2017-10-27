import React from 'react'
import Col from '../../grid/Col'
import Row from '../../grid/Row'
import ClientWrapper from '../../clients/ClientWrapper'

export default () => (
  <div
    className="container-fluid"
    id="clients-section"
  >
    <Row col={6} offset={3}>
      <h3 className="text-center">We're Experts in Client Happiness</h3>
    </Row>
    <div className="spacer-vertical" />
    <div className="row">
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Thumbster Connect"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'android-plain',
            'postgresql-plain',
            'redis-plain',
            'ruby-plain',
            'sass-original',
            'webpack-plain',
          ]}
          features={[
            'Geolocation',
            'QuickBooks Integration',
          ]}
          imageSrc="../../../../static/clients/ThumbsterConnect_Clients.png"
          link="https://thumbsterconnect.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="LoadUp Technologies"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'android-plain',
            'postgresql-plain',
            'redis-plain',
            'ruby-plain',
            'sass-original',
            'webpack-plain',
          ]}
          features={[
            'Team Management',
            'Stripe Integration',
          ]}
          imageSrc="../../../../static/clients/GoLoadUp_Web.png"
          link="https://goloadup.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Vector Exchange"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'postgresql-plain',
            'ruby-plain',
          ]}
          features={[
            'RSS Feed',
            'Victory Charts',
          ]}
          imageSrc="../../../../static/clients/Vector_Mobile.png"
          link="https://vectorexchange.io"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="New Story Charity"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'postgresql-plain',
            'ruby-plain',
          ]}
          features={[
            'Offline Ops',
            'Image Transforms',
          ]}
          imageSrc="../../../../static/clients/NewStoryCharity_Mobile.png"
          link="https://newstorycharity.org"
        />
      </Col>
    </div>
    <div className="row">
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Vlipsy Viewer"
          technologies={[
            'react-original',
            'nodejs-plain',
            'amazonwebservices-original',
            'android-plain',
            'mongodb-plain',
            'facebook-plain',
          ]}
          features={[
            'Video',
            'Social Sharing',
          ]}
          imageSrc="../../../../static/clients/Vlipsy_Mobile.png"
          link="https://vlipsy.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Steppingblocks"
          technologies={[
            'react-original',
            'angularjs-plain',
            'nodejs-plain',
            'heroku-original',
            'gulp-plain',
            'postgresql-plain',
            'mongodb-plain',
            'sass-original',
            'sequelize-plain',
          ]}
          features={[
            'Zoom Charts',
            'Automated Deploys',
          ]}
          imageSrc="../../../../static/clients/Steppingblocks_Web.png"
          link="https://steppingblocks.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="DailyLectio"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'postgresql-plain',
            'ruby-plain',
          ]}
          features={[
            'Native WebViews',
          ]}
          imageSrc="../../../../static/clients/DailyLectio_Mobile.png"
          link="https://dailylectio.net"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Polar Notion"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'postgresql-plain',
            'ruby-plain',
            'sass-original',
          ]}
          features={[
            'React Training',
            'React Native Training',
          ]}
          imageSrc="../../../../static/clients/PolarNotion_Web.png"
          link="https://polarnotion.com"
        />
      </Col>
    </div>
    <div className="row">
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Field Pros Direct"
          technologies={[
            'react-original',
            'nodejs-plain',
            'heroku-original',
            'mongodb-plain',
            'sass-original',
            'webpack-plain',
          ]}
          features={[
            'Intelligent Dispatch',
            'SMS Integration',
          ]}
          imageSrc="../../../../static/clients/FieldProsDirect_Web.png"
          link="https://fieldprosdirect.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Rayka"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'android-plain',
            'postgresql-plain',
            'ruby-plain',
            'facebook-original',
          ]}
          features={[
            'Google Maps',
            'Facebook Friends',
          ]}
          imageSrc="../../../../static/clients/Rayka_Mobile.png"
          link="https://rayka-app.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Tyrannosaurus Tech"
          technologies={[
            'react-original',
            'rails-plain',
            'heroku-original',
            'apple-original',
            'android-plain',
            'postgresql-plain',
            'ruby-plain',
          ]}
          features={[
            'Custom CMS',
          ]}
          imageSrc="../../../../static/clients/TyrannosaurusTech_Web.png"
          link="https://tyrannosaurustech.com"
        />
      </Col>
      <Col center col={3} offset={0}>
        <ClientWrapper
          title="Taskloop"
          technologies={[
            'react-original',
            'nodejs-plain',
            'heroku-original',
            'apple-original',
            'mongodb-plain',
          ]}
          features={[
            'Stripe Connect',
          ]}
          imageSrc="../../../../static/clients/Taskloop_Web.png"
          link="https://taskloop.io"
        />
      </Col>
    </div>
    <style jsx>{`
      #clients-section {
        min-height: 400px;
        padding-bottom: 50px;
      }
    `}</style>
  </div>
)
