const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = String(options.addition) !== 'undefined' ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const arrS = [];
  const arrA = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arrA.push(addition);
  }
  const addstr = arrA.join(additionSeparator);
  for (let i = 0; i < repeatTimes; i++) {
    arrS.push(`${str}` + addstr);
  }
  return arrS.join(separator);
};
  