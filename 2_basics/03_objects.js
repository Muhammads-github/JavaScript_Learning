// singleton

// object literals

// Object.create() // constructor method

const mySym = Symbol("key1");

const JsUser = {
  name: "Rock",
  age: 33,
  location: "New York",
  email: "rock@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Saturday", "Monday", "Friday"],
  [mySym]: "key1",
};

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rock@outlook.com";
// Object.freeze(JsUser); // lock the object
JsUser.email = "rock@email.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hi Welcome");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS, ${this.name}`);
};
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
