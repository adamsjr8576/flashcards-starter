const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store the deck array that contains the cards', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should default currentCard to the first card in the deck', function() {
    expect(round.currentCard).to.equal(deck.cards[0]);
  });

  it('should default with turns at 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should default to having incorrectGuesses be an empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should return incorrect if the guess is wrong', function() {
    expect(round.takeTurn('capybara')).to.equal('incorrect!');
  });

  it('should return correct if the guess is right', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should increment turns by one every time takeTurn is run', function() {
    round.takeTurn('capybara');
    expect(round.turns).to.equal(1);
    round.takeTurn('gallbladder');
    expect(round.turns).to.equal(2);
  });

  it('should add the id of the card to the incorrectGuesses array if the guess is wrong', function() {
    round.takeTurn('capybara');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should NOT add the id of the card to the incorrectGuesses array if the guess is correct', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should remove card guessed from the deck after each guess', function() {
    round.takeTurn('capybara');
    expect(round.currentCard).to.equal(card2);
  });

  it('should reassign the current card to the next card in the deck after each turn', function() {
    round.takeTurn('capybara');
    expect(round.deck.length).to.equal(2);
  });

  it('should calculate and return the percentage of correct answers', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('listening to music');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should end round and return ROUND OVER you answered []% correctly', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('listening to music');
    expect(round.endRound()).to.equal('**Round Over** You answered 33% of the questions correctly!');
  });

  it('should beginSecondRound and instantiate a new game and start startSecondDeck at end of round1', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.beginSecondRound()).to.equal(game);
  });
});
