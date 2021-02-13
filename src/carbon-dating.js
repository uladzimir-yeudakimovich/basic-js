const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const num = parseInt(sampleActivity);
  if (isNaN(num) || typeof sampleActivity !== 'string' || num > 2021 || Number.isInteger(num)) return false;
  const year = Math.ceil(Math.log(MODERN_ACTIVITY / HALF_LIFE_PERIOD) / (1.22 * Math.pow(10, -4) * Math.pow(num, -1)));
  return year > 0 ? year : false;
};
