const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a users guess', function() {
    const turn = new Turn('Object');
    expect(turn.guess).to.equal('Object');
  });

  it('should store Card object for the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Object', card);

    expect(turn.card).to.equal(card);
});

  it('should be able to return the guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Object', card);

    expect(turn.returnGuess()).to.equal('Object');
  });

  it('should be able to return the card in play', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Object', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate the user guess and return true if the guess is correct', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to evaluate the user guess and return false if the guess is incorrect', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn2 = new Turn('array', card);

    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to return a string of correct if the guess is correct', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should be able to return a string of incorrect if the guess is incorrect', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn2 = new Turn('array', card);

    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
