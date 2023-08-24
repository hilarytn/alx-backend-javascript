const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two whole numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should return the sum of whole number and a decimal as a whole number rounded up', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of two decimal as a whole number rounded up', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of two decimal numbers with parts greater than 5 as a whole number rounded up', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
