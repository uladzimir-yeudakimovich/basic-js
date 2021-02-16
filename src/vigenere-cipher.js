const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(simple) {
    this.simple = simple || true;
  }

  encrypt(message, key) {
    if (!message || !key) throw `Error: message and key required`;
    let enc = '';
    let shifr = key;
    while (shifr.length < message.length) {
      shifr += key;
    }
    let count = 0;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (let i = 0; i < message.length; i++) {
      if (/[A-Za-z]/.test(message[i])) {
        enc += alphabet[(alphabet.indexOf(message.toUpperCase()[i]) + alphabet.indexOf(shifr.toUpperCase()[count])) % 26];
        count += 1;
      } else {
        enc += message[i];
      }
    }
    return this.simple ? enc : enc.reverse()
  }

  decrypt(message, key) {
    if (!message || !key) throw `Error: message and key required`;
    let dec = '';
    let shifr = '';
    while (shifr.length < message.length) {
      shifr += key;
    }
    let count = 0;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (let i = 0; i < message.length; i++) {
      if (/[A-Za-z]/.test(message[i])) {
        dec += alphabet[(26 + alphabet.indexOf(message.toUpperCase()[i]) - alphabet.indexOf(shifr.toUpperCase()[count])) % 26];
        count += 1;
      } else {
        dec += message[i];
      }
    }
    return this.simple ? dec : dec.reverse()
  }
}

module.exports = VigenereCipheringMachine;
