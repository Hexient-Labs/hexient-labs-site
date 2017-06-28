const _phoneAreaCode = '855';
const _phoneFirstThree =  '674';
const _phoneLastFour = '4172';

const _phoneArray = [_phoneAreaCode, _phoneFirstThree, _phoneLastFour];

export default {
  phonePlain: _phoneArray.join(),
  phoneDotted: _phoneArray.join('.'),
  phoneHyphen:  _phoneArray.join('-'),
  email: 'admin@hexientlabs.com',
};
