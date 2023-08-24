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
  it('should return the sum of two decimal numbers as a whole number', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return the sum of two zero decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
  it('should return the sum of 0 as 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
