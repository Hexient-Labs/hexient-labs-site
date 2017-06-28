import Logo from '../components/Logo';
import Contact from '../constants/contact';

export default () => (
  <div>
    <Logo />
    <h1>Index</h1>
    {Contact.phoneDotted}
  </div>
);
