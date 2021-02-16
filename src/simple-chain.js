const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position > this.getLength() - 1
    ) {
      this.chain.length = 0;
      throw `Error: position ${position} is wrong!`;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain.length = 0;
    return res;
  }
};

module.exports = chainMaker;
