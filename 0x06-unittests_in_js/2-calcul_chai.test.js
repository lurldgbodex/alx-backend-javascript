const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('tests calculateNumber', () => {
  describe("type = 'SUM'", () => {
    it('positive numbers', () => {
      expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
    });

    it('round up number', () => {
      expect(calculateNumber('SUM', 2.5, 3.5)).to.equal(7);
    });

    it('round down number', () => {
      expect(calculateNumber('SUM', 2.1, 3.2)).to.equal(5);
    });

    it('whole number', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });

    it('negative number', () => {
      expect(calculateNumber('SUM', -2.4, 3.2)).to.equal(1);
    });

    it('negative number 2', () => {
      expect(calculateNumber('SUM', -2.3, -3.2)).to.equal(-5);
    });
  });

  describe("type = 'SUBTRACT'", () => {
    it('subtract nubers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('subtract numbers positive', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
    });

    it('subtract numbers negative', () => {
      expect(calculateNumber('SUBTRACT', -4.5, 1.4)).to.equal(-5);
    });

    it('subtract numbers negative 2', () => {
      expect(calculateNumber('SUBTRACT', 4.5, -1.4)).to.equal(6);
    });

    it('subtract numbers negative 3', () => {
      expect(calculateNumber('SUBTRACT', -4.5, -1.4)).to.equal(-3);
    });
  });

  describe("type = 'DIVIDE'", () => {
    it('divide number error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('divide number', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('divide number whole num', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });

    it('divide number negative', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });

    it('divide number negative 2', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });
  });
});
