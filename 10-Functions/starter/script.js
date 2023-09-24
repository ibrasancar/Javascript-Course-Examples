'use strict';


// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNum}`,
//             name
//         })
//     },
// }

// lufthansa.book('239', 'Jonas Schmedtmann');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// // does NOT work
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 69, 'LeBron James');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'SW',
//     bookings: [],
// }

// book.call(swiss, 31, 'Jebron Jebronoğlu');
// console.log(swiss);

// // apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// // bind method
// const bookEW = book.bind(eurowings);

// bookEW(23, 'Steven Williams');
// console.log(eurowings);;

// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);

// const bookEW23 = book.bind(eurowings, 65);
// bookEW23('Mehmet Mehmetoğlu');
// bookEW23('Martha Cooper');
// console.log(eurowings);

// console.clear();

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);;
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVAT = addTax.bind(null, 0.18);
// // addVAT = value => value + value * 0.18;

// console.log(addVAT(100));


// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     }
// }

// const addVAT2 = addTaxRate(0.18);
// console.log(addVAT2(100));


// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. Devamı sonraymış ?!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
//         if (isNaN(answer) || answer > this.answers.length || answer < 0) {
//             alert('What the actual fuck dude? There is no answer like that?')
//             return this.registerNewAnswer();
//         }
//         this.answers[answer]++;
//         this.displayResults();
//     },
//     displayResults(type = 'string') {
//         switch (type) {
//             case 'string':
//                 console.log(`Poll results are ${this.answers.join(', ')}.`);
//                 break;

//             case 'array':
//                 console.log(this.answers);
//                 break;

//             default:
//                 console.log('There is no that type of results.');
//                 break;
//         }
//     }
// }

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });


// const runOnce = function () {
//     console.log('This will never run again!');
//     const isPrivate = 23;
// }

// runOnce();

// // immediately invoked function expressions IIFE
// (function () {
//     console.log('This will never run again!');
// })();

// (() => console.log('This will also never run again'))();


// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }

// // console.log(isPrivate);
// console.log(notPrivate);

// CLOSURES
// const secureBooking = function () {
//     let passengerCount = 0;
//     let planeCounter = 15;

//     return function () {
//         passengerCount++;
//         planeCounter++;
//         console.log(`${passengerCount} passengers. and ${planeCounter}`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// EXAMPLE 1
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// f();

// // re-assigning f function
// h();
// f();

// console.dir(f);

// EXAMPLE 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers.`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers.`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds.`);
// }
// boardPassengers(180, 3);



(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();