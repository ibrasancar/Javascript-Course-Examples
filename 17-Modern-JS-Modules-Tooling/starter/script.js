// Importing module
import { addToCart, cart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('Corn', 250);
console.log(price);
console.log(tq);

////////////////////////////////

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

////////////////////////////////
// prettier-ignore
// import add, {addToCart,totalPrice as price,totalPrice,tq} from './shoppingCart.js';
/* import add, {cart} from './shoppingCart.js';
add('Bread', 5);
add('pizza', 3);
add('apples', 9);
console.log(cart);
 */
// top level await
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('WOHO');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// getLastPost().then(last => console.log(last));

// const lastPost = await getLastPost();
// console.log(lastPost);

/* const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart.`);
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
 */
if (module.hot) {
  module.hot.accept();
}

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 3 },
    { product: 'pizza', quantity: 1 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

class Person {
  #greeting = 'Hey!';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

const ibra = new Person('ibra');
console.log('ibra' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));
