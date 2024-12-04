// function add(a, b) {
//   a + b;
// }
//
// console.log(add(3, 2));
// console.log(add(5, 7));
// function greeting() {
//   console.log("Hello World");
// }
//
// greeting();
//
// let a = "hey";
// let b = function () {
//   return "Hello World!";
// };
//
// console.log(b());
// function greet() {
//   console.log("Hello World!");
// }
// greet();
//
// greet();
// function myName(name) {
//   return `My name is ${name}`;
// }
//
// console.log(myName("seth"));
// // console.log(myName("brian"));
// function greet(name) {
//   return `Hello, ${name}`;
// }
//
// console.log(greet("joseph"));
// function addTwoNumbers(x, y) {
//   let sum = x + y;
//   return sum;
// }
//
// console.log(`The sum of the two numbers is ${addTwoNumbers(2, 3)}`);
// function square(num) {
//   return num * num;
// }
//
// console.log(square(4));
// function president() {
//   return "Donald Trump";
// }
//
// let president45 = president();
// console.log(president45);
//console.log(Math.pow(2, 3)); // 2 * 2 * 3
// console.log("seth".toUpperCase());
// let cube = function (num) {
//   return Math.pow(num, 3);
// };
//
// console.log(cube(3));
// function multiply(num1, num2) {
//   return num1 * num2;
// }
//
// console.log(multiply(3));

// const square = (num) => {
//   return num * num;
// };

// const square = (num) => num * num;
//
// console.log(square(5));
// const myName = () => {
//   return () => "seth mwebi";
// };
//
// console.log(myName()());

// function presidentAspirant() {
//   let name = "Kamala Harris";
//   return name;
// }
//
// console.log(name);

// for (var i = 5; i < 10; i++) {
//   console.log(i);
// }
//
// console.log(i);
// sum = 0;
// function addNumbers(a, b) {
//   sum = 2 + 3;
//   return sum;
// }
//
// console.log(sum);
// function greet() {
//   var message = "Hello";
//   console.log(`Local: ${message}`);
// }
//
// //greet();
// console.log(message);
// let presidentElect = "Donald";
//
// const president = () => {
//   presidentElect = "Vivek";
// };
//
// president();
//
// console.log(presidentElect);
// sum = 0;
//
// const total = () => {
//   sum = 20 + 30;
// };
//
// total();
//
// console.log(sum);
const display_scopes = () => {
  let message = "local";

  if (true) {
    //let message = "block level";

    console.log(`Inner scope: ${message}`);
  }

  console.log(`outer scope: ${message}`);
};

display_scopes();
