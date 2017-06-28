// Module imports
import React from 'react';


// Component imports
import withStyleLib from '../hocs/withStyleLib';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import SelectInput from '../components/SelectInput';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import Title from '../components/Title';

// Styleguide imports
import StyleguidePanel from '../components/StyleguidePanel';

const styleguide = () => (
  <div className="container-fluid">
    <Title title="Hexient Labs Style Guide" />
    <hr />

    {/* Button component */}
    <StyleguidePanel
      name="Button - Reusable button component"
      propArray={Button.propDescription}>
      <Button onClick={() => {}} disabled={false} loading={false} type="primary" />
      <Button onClick={() => {}} type="info" />
      <Button onClick={() => {}} disabled loading type="warning" size="sm" />
      <Button onClick={() => {}} type="danger" size="lg" />
      <Button onClick={() => {}} block={true} />
    </StyleguidePanel>
  </div>
);

export default withStyleLib(styleguide);
