const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(simple) {
    this.simple = simple || true;
  }

  encrypt(message, key) {
    this.dataCheck(message, key);
    message = message.toUpperCase();
    const long = message.length;
    const shifr = this.shifrCreator(key, long);
    let text = '';
    let j = 0;
    for (let i = 0; i < long; i++) {
      if (/[A-Za-z]/.test(message[i])) {
        text += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(shifr[j])) % 26];
        j += 1;
      } else {
        text += message[i];
      }
    }
    return this.simple ? text : text.split('').reverse().join('');
  }

  decrypt(message, key) {
    this.dataCheck(message, key);
    message = message.toUpperCase();
    const long = message.length;
    const shifr = this.shifrCreator(key, long);
    let text = '';
    let j = 0;
    for (let i = 0; i < long; i++) {
      if (/[A-Za-z]/.test(message[i])) {
        text += this.alphabet[(26 + this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(shifr[j])) % 26];
        j += 1;
      } else {
        text += message[i];
      }
    }
    return this.simple ? text : text.split('').reverse().join('');
  }

  dataCheck(message, key) {
    if (!message || !key) throw `Error: message and key required`;
  }

  shifrCreator(key, long) {
    let shifr = '';
    while (shifr.length < long) {
      shifr += key;
    }
    return shifr.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
