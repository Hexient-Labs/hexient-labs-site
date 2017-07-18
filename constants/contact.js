const _phoneAreaCode = '678';
const _phoneFirstThree =  '941';
const _phoneLastFour = '9507';

const _phoneArray = [_phoneAreaCode, _phoneFirstThree, _phoneLastFour];

export default {
  phonePlain: _phoneArray.join(),
  phoneDotted: _phoneArray.join('.'),
  phoneHyphen:  `(${_phoneAreaCode}) ${_phoneFirstThree}-${_phoneLastFour}`,
  email: 'admin@hexientlabs.com',
};
