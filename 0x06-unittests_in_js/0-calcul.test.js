const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the sum of whole number and a decimal as a whole number rounded up', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return the sum of two decimal as a whole number rounded up', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return the sum of two decimal numbers with parts greater than 5 as a whole number rounded up', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return the sum of two zero decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
  it('should return the sum of 0 as 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
