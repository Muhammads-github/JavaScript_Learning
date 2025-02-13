const score = 400;

// console.log(score);

const balance = new Number(500);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(3));

const otherNumber = 25.326595;
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000;
// console.log(hundreds.toLocaleString());

// +++++++++ Maths +++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(7.777)); // 8
// console.log(Math.round(7.444)); // 7
// console.log(Math.ceil(7.777)); // 8
// console.log(Math.floor(7.777)); // 7
// console.log(Math.min(3, 5, 6)); // gives minimum value
// console.log(Math.max(3, 5, 6)); // gives maximum value

console.log(Math.random()); // ranges from 0 - 1
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
