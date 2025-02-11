const name = "Rock";
const age = 33;

// console.log(name + " " + age + " Year"); // little outdated

// console.log(`Hello my name is ${name} and my age is ${age}`); // Modern way

const gameName = new String("Fortnight");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 5); // subtract the string
console.log(newString);

const anotherString = gameName.slice(4, 9); // slice the string
console.log(anotherString);

const newStringOne = "  rock    0";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removers starting space and end spaces
