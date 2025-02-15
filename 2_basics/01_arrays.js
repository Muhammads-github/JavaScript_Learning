// Arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Superman", "Batman", "Thor"];
// console.log(myHeroes[2]); // Thor

// Array methods

myArr.push(6); // push is used to add values
myArr.push(7);
myArr.pop(); // pop removes the last value
myArr.unshift(8); // adds the value to the beginning
myArr.shift(); // removes the first value
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join();
// console.log(newArr); // binds as a string

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // start to end excluding the end number

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // includes the end number
console.log("C", myArr);
console.log(myn2);
