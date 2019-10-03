const data = require('./data');
const prototypeQuestions2 = data.prototypeData2;
const util = require('./util');
const Game = require('./Game');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
// console.log(Game);

class Round {
  constructor(deck, game) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
    console.log(Turn);
  }

  returnCurrentCard() {
      // console.log(Game);
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
    // console.log(Game);
    let percentCorrect = Math.floor((1-(this.incorrectGuesses.length / this.turns)) * 100);
    return percentCorrect;
  }

  endRound() {
    console.log(`**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    // console.log(Game);
    // if (this.calculatePercentCorrect < 90 &&& this.turns === 30) {
    //   const game = new Game();
    //   game.start();
    // }
    // if (this.calculatePercentCorrect < 90 &&& this.turns === 29) {
    //   const game = new Game();
    //   game.beginSecondRound();
    // }
    if (this.turns > 29) {
      this.beginSecondRound();
    }
    return `**Round Over** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

  rotateDeck() {
    let card = this.deck.shift();
    this.currentCard = this.deck[0];
  }

  beginSecondRound() {
    // console.log(Game);
    // const game = new Game();
    this.game.startSecondDeck();
    return this.game;
    // let cards = [];
    // prototypeQuestions2.forEach(function(question) {
    //   const card = new Card(question.id, question.question, question.answers, question.correctAnswer);
    //   cards.push(card);
    // });
    // const deck = new Deck(cards);
    // const round2 = new Round(deck);
    // this.printMessage2(deck, round2);
    // this.printQuestion(round2);
  }

//   printMessage2(deck, round) {
//       console.log(`Welcome to FlashCards Round 2! You are playing with ${deck.countCards()} cards.
// -----------------------------------------------------------------------`)
//   }
//
//   printQuestion(round) {
//       util.main(round);
//   }
}

module.exports = Round;
