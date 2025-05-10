// ================================= 1

function justFunction() {
  console.log("ჩვეულებრივი ფუნქცია");
}

justFunction();

// ================================= 2

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// ================================= 3

function userInfro(name, lastName) {
  return `Hello ${name} ${lastName}`;
}

console.log(userInfro("ლიზი", "ლომიძე"));

// ================================= 4

function multiply(a = 1, b = 1, c = 1) {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 3)); // 6

//ასევე შეიძლება ასე

const multiply2 = (a = 1, b = 1, c = 1) => a * b * c;
console.log(multiply2(2, 3, 4));

// ================================= 5

function moneyExchange(tetri) {
  const lari = Math.floor(tetri / 100);
  const tetriLeft = tetri % 100;
  return `ლარი: ${lari}, თეთრი: ${tetriLeft}`;
}
console.log(moneyExchange(1234)); // ლარი: 12, თეთრი: 34

// ================================= 6

function type(value) {
  return typeof value;
}

console.log(type(123)); // number
console.log(type("123")); // string

// ================================= 7

const counterManager = {
  counter: 0,
  initialValue: 0,

  increase() {
    this.counter += 50;
    console.log(`მიმდინარე მნიშვნელობა: ${this.counter}`);
  },

  reset() {
    this.counter = this.initialValue;
    console.log(`მნიშვნელობა დააბრუნდა საწყისზე: ${this.counter}`);
  },
};
counterManager.increase(); // 50
counterManager.increase(); // 100
counterManager.reset(); // 0
counterManager.increase(); // 50

// ================================= 8

function highOrderFunction(callback) {
  console.log("ტექსტი higher-order ფუნქციიდან:");
  callback();
}

function sayHello() {
  console.log("გამარჯობა");
}

highOrderFunction(sayHello);

// ================================= 9

function highOrderFunction2(callback) {
  console.log(plus(2, 3));
  callback();
}

function plus(a, b) {
  return a + b;
}

highOrderFunction2(plus); // 5

// ================================= 10

function highOrderFunction3(callback) {
  console.log(userId("ლიზი", 25));
  callback();
}

function userId(name, age) {
  return `მომხმარებლის სახელი: ${name}, ასაკი: ${age}`;
}

highOrderFunction3(userId);

// ================================= 11

function higherOrder(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = higherOrder(5);
console.log(add5(3));

// ================================= 12

const printText = () => {
  console.log("რაღაცა ტექსტი");
};
printText();

// ================================= 13

const expressionPlus = (a, b) => {
  return a + b;
};
console.log(expressionPlus(2, 3));

// ================================= 14

const highOrderExpFun = (callback) => {
  console.log(townCountry("თბილისი", "საქართველო"));
  callback();
};

const townCountry = (town, country) => {
  return `ქალაქი: ${town}, ქვეყანა: ${country}`;
};

highOrderExpFun(townCountry);

// ================================= 15

function getProportion(callback) {
  console.log(newSize(1920, 1080, 1024));
  callback();
}

function newSize(size1, size2, size3) {
  return `ზომა 1: ${size1}, ზომა 2: ${size2}, ზომა 3: ${size3} მივიღებთ ზომას: ${
    (size2 * size3) / size1
  }`;
}
getProportion(newSize);
