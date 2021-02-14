const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deep = 0;
    const recursion = arr => {
      deep += 1;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          recursion(arr[i]);
        }
      }
    }
    recursion(arr);
    return deep;
  }
};