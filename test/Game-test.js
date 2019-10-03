const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a round containing a deck that is storeds in currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.deep.equal(null);
  });

});
