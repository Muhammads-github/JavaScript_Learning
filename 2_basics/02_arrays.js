const marvel_heroes = ["Thor", "Iron-man", "Spider-Man"];
const dc_heroes = ["Superman", "Batman", "Flash"];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // returns array into the array as a index value

const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); // returns a new array the combined array

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // this is spread operator
// console.log(all_new_heroes);

const worst_array = [1, 2, 3, [4, 5], 6, 7, [8, 9]];
const good_array = worst_array.flat(Infinity); // flattens all the arrays
// console.log(good_array);

console.log(Array.isArray("Rock"));
console.log(Array.from("Rock"));
console.log(Array.from({ name: "Rock" })); // returns an empty array because dont know which one to make array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
