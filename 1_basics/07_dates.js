// TOPIC: Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); // Fri Feb 14 2025 15:30:33 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString()); // Fri Feb 14 2025
// console.log(myDate.toISOString()); // 2025-02-14T09:30:33.105Z
// console.log(myDate.toLocaleDateString()); // 2 / 14 / 2025;
// console.log(myDate.toUTCString()); // Fri, 14 Feb 2025 09:30:33 GMT
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23);
// console.log(myCreatedDate.toDateString()); // Thu Jan 23 2025

let myCreatedDate2 = new Date(2025, 1, 14, 16, 46); // 2/14/2025, 4:46:00 PM
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-02-14");
// console.log(myCreatedDate3.toLocaleString()); // yy-mm-dd // 2/14/2025, 6:00:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1739530366304

// console.log(myCreatedDate.getTime()); // 1737568800000

// console.log(Math.floor(Date.now() / 1000)); // in sec // 1739530758

let newDate = new Date();
console.log(newDate.getMonth());

newDate.toLocaleString("default", {
  weekday: "long",
});
