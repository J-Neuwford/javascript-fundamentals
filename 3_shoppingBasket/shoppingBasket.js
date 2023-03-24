class ShoppingBasket {
  constructor() {
    this.totalPrice = 0;
    this.candies = []
  }

  getTotalPrice() {
    this.candies.forEach(candy => {
      this.totalPrice += candy.price;
    })
    return this.totalPrice;
  }

  addItem(candy) {
    this.candies.push(candy);
  }
}

module.exports = ShoppingBasket;