class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.lastGuess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.lastGuess = Math.ceil((this.min + this.max) / 2);
    return this.lastGuess;
  }

  lower() {
    this.max = this.lastGuess;
  }

  greater() {
    this.min = this.lastGuess;
  }
}

module.exports = GuessingGame;
