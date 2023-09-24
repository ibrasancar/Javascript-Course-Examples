// Exporting module
console.log('Exporting module');
// // blocking code
// console.log('Fetching users!');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching!');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq, cart };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
}
