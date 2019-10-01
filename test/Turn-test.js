const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
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
    const card2 = new Card(2, 'What color is an orange?', ['orange', 'red', 'blue', 'yellow'], 'orange');
    const turn = new Turn('Object', card);
    const turn2 = new Turn('red', card2);

    expect(turn.card).to.deep.equal({
     id: 1,
     question: 'What allows you to define a set of related information using key-value pairs?',
     answers: ['object', 'array', 'function'],
     correctAnswer: 'object' });

     expect(turn2.card).to.deep.equal({
      id: 2,
      question: 'What color is an orange?',
      answers: ['orange', 'red', 'blue', 'yellow'],
      correctAnswer: 'orange' });

    expect(turn.guess).to.equal('Object');
  });

  it('should be able to return the guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Object', card);

    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should be able to return the card in play', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Object', card);

    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should be able to evaluate the user guess and return a boolean that indicated whether the guess is correct or not', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn('array', card);

    expect(card.correctAnswer).to.equal('object');
    expect(turn.guess).to.equal('object');
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to return a string of either correct or incorrect based on whether the guess is correct or not', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
