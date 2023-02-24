const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests calculateNumber', () => {
  describe("type = 'SUM'", () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 4.0), 5);
    });

    it('round up number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.5), 7);
    });

    it('round down number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.1, 3.2), 5);
    });

    it('whole number', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });

    it('negative number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.4, 3.2), 1);
    });

    it('negative number 2', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -3.2), -5);
    });
  });

  describe("type = 'SUBTRACT'", () => {
    it('subtract nubers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('subtract numbers positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
    });

    it('subtract numbers negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.5, 1.4), -5);
    });

    it('subtract numbers negative 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, -1.4), 6);
    });

    it('subtract numbers negative 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.5, -1.4), -3);
    });
  });

  describe("type = 'DIVIDE'", () => {
    it('divide number error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('divide number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('divide number whole num', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });

    it('divide number negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    });

    it('divide number negative 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });
  });
});
