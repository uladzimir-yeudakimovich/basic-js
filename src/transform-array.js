const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new CustomError(`${arr} is not Array`);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i += 2;
    } else if (arr[i] === '--discard-prev') {
      if (i > 1 && newArr.length) newArr.pop();
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) newArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      if (i > 1) newArr.push(arr[i - 1]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
