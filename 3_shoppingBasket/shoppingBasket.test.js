// SHOPPING BASKET
// - getTotalPrice()
// - addItem

const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
  it('returns the total price with 0 candies', () => {
    basket = new ShoppingBasket();
    t = basket.getTotalPrice();
    expect(t).toEqual(0);
  })

  it('adds a candy and returns the total price', () => {
    basket = new ShoppingBasket();
    const candyDouble = { name: 'Mars', price: 1.99 };
    basket.addItem(candyDouble);
    const t = basket.getTotalPrice();
    expect(t).toEqual(1.99);
  })

  it('adds 2 candies and returns the total price', () => {
    basket = new ShoppingBasket();
    const a = { name: 'Mars', price: 1};
    const b = {name: 'Snickers', price: 2};
    basket.addItem(a);
    basket.addItem(b);
    const t = basket.getTotalPrice();
    expect(t).toEqual(3);
  })
})