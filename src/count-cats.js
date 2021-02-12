const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(el => {
    count += el.filter(n => n === '^^').length;
  })
  return count;
};
