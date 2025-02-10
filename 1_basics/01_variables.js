const accountId = 12456;
let accountEmail = "email@gmail.com";
var accountPassword = "12345";
accountCity = "New York";
let accountState;

// accountId = 2; // not allowed

accountEmail = "random@gmail.com";
accountPassword = "00000";
accountCity = "Paris";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
