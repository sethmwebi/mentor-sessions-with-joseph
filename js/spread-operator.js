// const numbers = [4, 5, 6];
//
// console.log(...numbers);
// const studentList1 = ["Kevin", "Bryan", "Mike"];
// const studentList2 = ["Ivy", "Bella", "Charity"];
//
// const allStudents = [...studentList1, ...studentList2];
// console.log(...allStudents);
// const students = ["Kevin", "Mike", "Janice"];
// const clonedStudentList = [...students];
// console.log(clonedStudentList);
// const studentList1 = {
//   mike: 72,
//   john: 70,
//   margaret: 80,
// };
//
// const studentList2 = {
//   ivy: 60,
//   kevin: 90,
//   bella: 96,
// };
//
// const singleObject = { ...studentList2, ...studentList1 };
// console.log(singleObject);
// function print(...args) {
//   console.log(args);
// }
//
// print(1, true, { name: "seth" });
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

let numbers = [10, 20, 30];

sum(...numbers);
