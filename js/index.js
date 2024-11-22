// console.log("Hello World!");
// console.log(`mark`);
// // numbers
// const position = 3;
// const pi = 3.142;
// const negativeNumber = -23;
//
// console.log(typeof negativeNumber);
// console.log(40 / 0);
// console.log(typeof Infinity);
//
// console.log("abc" / 23);
// console.log(typeof Math.pow(2, 54));
//
// // let president = false;
// // console.log("Kamala: " + !president);
// // console.log("Trump: " + president);
//
// let student = undefined;
// console.log(typeof student);
//
// // let student = {
// //   name: "seth",
// //   course: "se",
// // };
// //
// let user = null;
// console.log(typeof user);
// // quirky language
// console.log(1 + parseInt("1"));
// console.log("1" + "1");
//
// let value1 = Symbol("programiz");
// let value2 = Symbol("programiz");
// console.log(value1 == value2);
//
// let president = {
//   first_name: "Donald",
//   last_name: "Trump",
//   age: 78,
// };
//
// console.log(
//   "The name of the US president is " +
//     president.first_name +
//     " " +
//     president.last_name +
//     " and he is " +
//     president.age +
//     " years old",
// );
//
// function concatenate(str1, str2) {
//   return str1 + str2;
// }
//
// console.log(concatenate("Hello, ", "World!"));
//
// // console.log(4 * 3);
// // console.log(22 / 7);
// // console.log(2 - 7);
//
// console.log(12 % 7);
// // modulus
// let number = 9;
// // number -= 2;
// // number = number + 2;
// number += 3;
// console.log(number);
//
// console.log(5 ** 3);
// console.log(5 * 5 * 5);
// console.log(4 ** 4);
// console.log(Math.pow(4, 4));
//
// let students = 24;
//
// // console.log((students *= 3));
// // console.log((students /= 8));
// // console.log((students %= 11));
// let number = "3";
// let number2 = 3;
//console.log(number === number2);

//true && true => true
// true && false => false
// false && false => false
// false && true => false
//
// true || false => true
// false || false => false
// false || true => true
// true || true => true

// let number = 4;
// let number2 = 3;
// const value = 2;
// const value2 = 3;
//
// console.log(number > number2 || value < value2);

// let president = false;
// console.log(!president);
// const firstName = "seth";
// const lastName = "mwebi";
// console.log(`${firstName} ${lastName}`);
// function basicCalculator(num1, op, num2) {
//   switch (op) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "wrong operator used!";
//   }
// }
//
// console.log(basicCalculator(2, "**", 3));
// mark
/*mark*/
/*let student = "mark"
let tutor = "wambua"*/

//var name = "Trump" // president
// console.log("3" === 3);
// console.log(3 + null);
// console.log(0 == null);
// const number = String(3);
// console.log(typeof number);
// console.log(Boolean(undefined));
// "", false, null, 0, undefined => falsy
// anything else => truthy
// const value = "5";
// console.log(value / 2);
// console.log(Boolean(" "));
// function greaterThanFive(num) {
//   if (num > 5) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
//

// function greaterThanFive(num) {
//   return num > 5 ? "Yes" : "No";
// }
// // ternary operator in javascript
// console.log(greaterThanFive(3));
// let passmark = 40;
//
// let myScore = 38;
//
// if (myScore > passmark) {
//   console.log("You passed the exam");
// } else {
//   console.log("You failed the exam");
// }
// let studentMark = 56;
//
// if (studentMark > 81) {
//   console.log("A");
// } else if (studentMark >= 75) {
//   console.log("A-");
// } else if (studentMark >= 67) {
//   console.log("B+");
// } else if (studentMark >= 60) {
//   console.log("B");
// } else if (studentMark >= 55) {
//   console.log("B-");
// } else if (studentMark >= 48) {
//   console.log("C+");
// } else if (studentMark >= 42) {
//   console.log("C");
// } else if (studentMark >= 37) {
//   console.log("C-");
// } else if (studentMark >= 32) {
//   console.log("D+");
// } else if (studentMark >= 28) {
//   console.log("D");
// } else if (studentMark >= 22) {
//   console.log("D-");
// } else {
//   console.log("E");
// }
// check if number is positive
// let enteredNumber = parseInt(prompt("Please enter a number: "));
// console.log(typeof enteredNumber);
//
// if (enteredNumber > 0) {
//   console.log("The number you entered is positive");
// } else {
//   console.log("The number you entered is negative");
// }
// let marks = 18;
//
// if (marks >= 40) {
//   if (marks >= 80) {
//     console.log("Distinction");
//   } else {
//     console.log("passed");
//   }
// } else {
//   if (marks > 20) {
//     console.log("You passed on probation");
//   } else {
//     console.log("You have been suspended");
//   }
// }
// function checkPassOrFail(mark) {
//   if (mark >= 40) {
//     return "Passed";
//   } else {
//     return "Failed";
//   }
// }

// function checkPassOrFail(mark) {
//   return mark >= 40 ? "Passed" : "Failed";
// }
//
// console.log(checkPassOrFail(56));
// DRY PRINCIPLE
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// console.log("Joseph");
// for (let i = 0; i <= 5; i++) {
//   console.log("Joseph");
// }
// // joseph
// joseph
// joseph
// joseph
// joseph
// joseph
// for(initialize; condition; increment)
// for (let j = 10; j > 0; j -= 2) {
//   console.log(j);
// }
// for (let k = 3; k > 0; k--) {
//   console.log("Hello, World");
// }
// for (let j = 1; j <= 5; j++) {
//   console.log(j);
// }
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum = sum + i;
// }
//
// console.log(sum);
// const students = [
//   "Seth Mwebi",
//   "Joseph Mark",
//   "Fonte Wanyama",
//   "Charity Nambi",
// ];
// const nonsensical = [
//   "mark",
//   89,
//   true,
//   { name: "seth" },
//   null,
//   undefined,
//   Symbol("unique"),
// ];
// for (let i = 0; i < students.length; i++) {
//   console.log(`student ${i + 1}: ${students[i]}`);
// }
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(`i: ${i} j: ${j}`);
//   }
// }
// for (let k = 1; k < 3; k++) {
//   for (let l = 1; l < 3; l++) {
//     console.log(`${k} ${l}`);
//   }
// }
// let k = 0;
// for (; k < 3; ) {
//   console.log(k);
//   k++;
// }
// 4! 4 * 3 * 2 * 1
// function factorial(num) {
//   let product = 1;
//   for (let i = num; i > 0; i--) {
//     product = product * i;
//   }
//   return product;
// }
//
// function factorial(num) {
//   let product = 1;
//   for (let i = 1; i <= num; i++) {
//     product = product * i;
//   }
//   return product;
// }
// console.log(factorial(5));

let countdown = 10;
while (countdown > 0) {
  console.log(countdown--);
}
