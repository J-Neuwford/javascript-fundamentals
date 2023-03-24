const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];


// const searchCandies = (string, cost) => {
//   const result = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i].price <= cost && candies[i].name.toLowerCase().startsWith(string.toLowerCase())) {
//       result.push(candies[i].name);
//     }
//   }
//   return result;
// }

const searchCandies = (name, maxPrice) => {
  const result = [];
    candies.filter(candy => {
    if (candy.price <= maxPrice && candy.name.toLowerCase().startsWith(name.toLowerCase())) {
      result.push(candy.name);
    }
  })
  return result;
}

module.exports = searchCandies;