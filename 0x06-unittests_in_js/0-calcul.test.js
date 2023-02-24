const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('calculates and rounds numbers', () => {
    assert.strictEqual(calculateNumber(2.4, 3.1), 5);
  });
  it('calculates one float and one int', () => {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });
  it('calculates two integers', () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
  });
  it('rounds up floating numbers', () => {
    assert.strictEqual(calculateNumber(3.5, 2.0), 6);
  });
  it('rounds down floating point', () => {
    assert.strictEqual(calculateNumber(2.49, 5.49), 7);
  });
  it('calculateNumber = 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('calculateNumber = 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
});
