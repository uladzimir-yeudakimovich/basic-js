const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(simple) {
    this.simple = simple || true;
  }

  encrypt(message, key) {
    return this.mainLogic(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.mainLogic(message, key, 'decrypt');
  }

  mainLogic(message, key, action) {
    if (!message || !key) throw `Error: message and key required`;
    message = message.toUpperCase();
    const long = message.length;
    const shifr = this.shifrCreator(key, long);
    let text = '';
    let j = 0;
    for (let i = 0; i < long; i++) {
      if (/[A-Za-z]/.test(message[i])) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        if (action === 'encrypt') {
          text += alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(shifr[j])) % 26];
        } else if (action === 'decrypt') {
          text += alphabet[(26 + alphabet.indexOf(message[i]) - alphabet.indexOf(shifr[j])) % 26];
        }
        j += 1;
      } else {
        text += message[i];
      }
    }
    return this.simple ? text : text.split('').reverse().join('');
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
