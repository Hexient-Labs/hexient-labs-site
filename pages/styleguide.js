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


const styleguide = () => (
  <div className="container-fluid">
    <h1>This is the Hexient Labs component style guide.</h1>
    <hr />

    <h3>Button</h3>
    <table className="table table-responsive table-striped table-bordered table-condensed">
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          <td>Required</td>
          <td>Default</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>false</td>
          <td>Whether the button is disabled</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>false</td>
          <td>Whether the button should be in 'loading' state</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>Function</td>
          <td>true</td>
          <td>N/A</td>
          <td>onClick handler</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>false</td>
          <td>'Submit'</td>
          <td>Title of the button</td>
        </tr>
      </tbody>
    </table>
    <Button onClick={() => {}} />
    <hr />
    <br />
  </div>
);

export default withStyleLib(styleguide);
