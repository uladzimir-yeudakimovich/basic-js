const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.toDateString()) return 'Error';
  const mounth = date.getMonth();
  if (mounth >= 0 && mounth < 2 || mounth === 11) {
    return 'winter';
  } else if (mounth < 5) {
    return 'spring';
  } else if (mounth < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
};
