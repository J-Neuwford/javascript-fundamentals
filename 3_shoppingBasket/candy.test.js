// CANDY
// - getName()
// - getPrice()

const Candy = require('./candy');

describe('Candy', () => {
  it('returns the name of a candy', () => {
    const c = new Candy('Mars', 1.99);
    const name = c.getName();
    expect(name).toEqual('Mars');
  })

  it('return the price of a candy', () => {
    const c = new Candy('Mars', 1.99);
    const price = c.getPrice();
    expect(price).toEqual(1.99);
  })
})


