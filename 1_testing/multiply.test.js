const multiply = require('./multiply.js');

describe('multiply', () => {
  it('multiplies 4 by 3', () => {
    expect(multiply(4, 3)).toBe(12);
  })

  it('multiplies 5 by 5', () => {
    expect(multiply(5, 5)).toBe(25);
  })
});