'use strict';

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // never create a method inside of a construction function
//   // this.calcAge = birthYear => console.log(2023 - this.birthYear);
// };

// // BTS
// // New
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const ibra = new Person('İbrahim', 1998);
// console.log(ibra);

// console.log(jonas instanceof Person);

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// jonas.calcAge();
// ibra.calcAge();

// console.log(ibra.__proto__);
// console.log(ibra.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo Sapiens';

// console.log(ibra.species);
// console.log(ibra.hasOwnProperty('firstName'));
// console.log(ibra.hasOwnProperty('species'));

// console.clear();
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__ == Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 90);
// const mercedes = new Car('Mercedes', 120);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();

// class expression
// const PersonCl = class {};

// class declaration
/* class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(`Your age: ${2023 - this.birthYear}`);
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica.__proto__ === PersonCl.prototype);
 */
/* 
const account = {
  owner: 'Ibra',
  movements: [200, 35, 400, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
account.latest = 90;
console.log(account.movements);
 */

/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(`Your age: ${2023 - this.birthYear}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 2002;

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
console.log(sarah);
 */

/* class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = Number(speed);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new Car('BMW', 90);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
console.log(bmw.speedUS);
bmw.speedUS = 60;
console.log(bmw);
console.log(bmw.speedUS);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
console.log(bmw.speedUS);
 */

/* const Person = function (firstName, birthYear) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2002, 'Computer Science');

console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike);
 */
/* CODE CHALLENGE #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};
Ev.prototype.constructor = Ev;

const tesla = new Ev('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.chargeBattery(100);
tesla.accelerate();
console.log(tesla);
 */

/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2027 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there👋🏽');
  }
}

PersonCl.hey();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
  calcAge() {
    console.log(
      `I'm ${this.age} years old but as a student I feel more like ${
        this.age + 20
      }.`
    );
  }
}

const ibra = new StudentCl('İbrahim Sancaroğlu', 1998, 'Art');
ibra.introduce();
ibra.calcAge();
 */
/* 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2002, 'Computer Science');
jay.introduce();
 */
/* 
class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    // this._movements = [];
    this.#pin = pin;
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public Methods
  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(money) {
    this.#movements.push(money);
    return this;
  }
  withdraw(money) {
    this.deposit(-money);
    return this;
  }

  requestLoan(money) {
    if (this.#approveLoan()) {
      this.deposit(money);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('HELPER!');
  }

  // Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(350);
acc1.withdraw(150);
acc1.requestLoan(2500);

console.log(acc1.getMovements());
// console.log(acc1.#movements);
// console.log(acc1.#approveLoan);
console.log(acc1);
Account.helper();
acc1.deposit(250).deposit(400).withdraw(250).requestLoan(250).withdraw(1500);
console.log(acc1.getMovements());
 */

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = Number(speed);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EV extends Car {
  #charge;
  constructor(brand, speed, charge) {
    super(brand, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.brand} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }.`
    );
    return this;
  }
  set chargeBattery(chargeTo) {
    return (this.#charge = chargeTo);
  }
}

const rivian = new EV('Rivian', 120, 15);
rivian.accelerate().accelerate().accelerate().brake();
rivian.chargeBattery = 50;
console.log(rivian);
console.log(rivian.speedUS);
console.log((rivian.speedUS = 200));
