// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 3165462316563513n;

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Superman", "Iron Man", "Thor"];

let myObj = {
  name: "Muhammad",
  age: 26,
};

const muFunction = function () {
  console.log("This is a function");
};

// ++++++++ Memory ++++++++++

// Stack (Primitive),  Heap (Non-Primitive)

let firstName = "Rock";

let anotherFirstName = firstName;

anotherFirstName = "John";

console.log(anotherFirstName);
console.log(firstName);

let userOne = {
  email: "userOne@email.com",
  userId: "userOneId",
};
let userTwo = userOne;

userTwo.email = "userTwo@emil.com";

console.log(userOne.email);
console.log(userTwo.email);
