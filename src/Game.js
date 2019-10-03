const data = require('./data');
const prototypeQuestions = data.prototypeData;
const prototypeQuestions2 = data.prototypeData2;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(function(question) {
      const card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      cards.push(card);
    });
    const deck = new Deck(cards);
    const round = new Round(deck, this);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  startSecondDeck() {
    let cards = [];
    prototypeQuestions2.forEach(function(question) {
      const card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      cards.push(card);
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
