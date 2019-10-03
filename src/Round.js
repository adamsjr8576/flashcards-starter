const data = require('./data');
const prototypeQuestions2 = data.prototypeData2;
const util = require('./util');
const Game = require('./Game');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck, game) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
  }

  returnCurrentCard() {
      return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    if(turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.rotateDeck();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentCorrect = Math.floor((1-(this.incorrectGuesses.length / this.turns)) * 100);
    return percentCorrect;
  }

  endRound() {
    console.log(`**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    if (this.calculatePercentCorrect() < 90 && this.turns === 30) {
      this.game.start();
    }
    if (this.calculatePercentCorrect() < 90 && this.turns === 29) {
      this.game.startSecondDeck();
    }
    if (this.calculatePercentCorrect() >= 90 && this.turns > 29) {
      this.game.startSecondDeck();
    }
    return `**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

  rotateDeck() {
    let card = this.deck.shift();
    this.currentCard = this.deck[0];
  }

  beginSecondRound() {
    this.game.startSecondDeck();
    return this.game;
  }
}

module.exports = Round;
