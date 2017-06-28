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
  <div>
    <h1>This is the Hexient Labs component style guide.</h1>
    <hr />
    <br />

    <h2>Button</h2>
    <h4>A reusable button component that takes props:</h4>
    <table className="c-table c-table--striped">
      <thead className="c-table__head">
        <tr className="c-table__row c-table__row--heading">
          <td className="c-table__cell">Name</td>
          <td className="c-table__cell">Type</td>
          <td className="c-table__cell">Required</td>
          <td className="c-table__cell">Default</td>
          <td className="c-table__cell">Description</td>
        </tr>
      </thead>
      <tbody className="c-table__body">
        <tr className="c-table__row">
          <td className="c-table__cell">disabled</td>
          <td className="c-table__cell">Boolean</td>
          <td className="c-table__cell">false</td>
          <td className="c-table__cell">false</td>
          <td className="c-table__cell">Whether the button is disabled</td>
        </tr>
        <tr className="c-table__row">
          <td className="c-table__cell">loading</td>
          <td className="c-table__cell">Boolean</td>
          <td className="c-table__cell">false</td>
          <td className="c-table__cell">false</td>
          <td className="c-table__cell">Whether the button should be in 'loading' state</td>
        </tr>
        <tr className="c-table__row">
          <td className="c-table__cell">onClick</td>
          <td className="c-table__cell">Function</td>
          <td className="c-table__cell">true</td>
          <td className="c-table__cell">N/A</td>
          <td className="c-table__cell">onClick handler</td>
        </tr>
        <tr className="c-table__row">
          <td className="c-table__cell">title</td>
          <td className="c-table__cell">String</td>
          <td className="c-table__cell">false</td>
          <td className="c-table__cell">'Submit'</td>
          <td className="c-table__cell">Title of the button</td>
        </tr>
      </tbody>
    </table>
    <Button onClick={() => {}} />
    <hr />
    <br />
  </div>
);

export default withStyleLib(styleguide);
