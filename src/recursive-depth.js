const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let sum = 1;
        sum += this.calculateDepth(arr[i]);
        if (sum > depth) depth = sum;
      }
    }
    return depth;
  }
};