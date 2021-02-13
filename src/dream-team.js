const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) return false;
  return members.map(el => {
    if (typeof el === 'string') {
      return el.trim()[0].toUpperCase();
    }
  }).sort().join('');
};
