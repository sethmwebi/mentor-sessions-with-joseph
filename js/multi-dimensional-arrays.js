// const data = [
//   ["kevin", "mike", "john"],
//   ["james", "clinton", "charity"],
//   ["diana", "ivy", "maureen"],
// ];
//
// // console.log(data[1][1]);
// console.log(data[2][0]);
//
let student1 = ["kevin", 20];
let student2 = ["ivy", 19];
let student3 = ["mike", 17];
// let student4 = ["hellen", 20];

let studentsData = [student1, student2, student3];
// studentsData.splice(1, 1);
// console.log(studentsData);
// for (let i = 0; i < studentsData.length; i++) {
//   console.log(`${studentsData[i][0]} is ${studentsData[i][1]} years old`);
// }
// for (let i = 0; i < studentsData.length; i++) {
//   for (let j = 0; j < studentsData[i].length; j++) {
//     console.log(studentsData[i][j]);
//   }
// }
// studentsData.forEach((student) => {
//   student.forEach((data) => {
//     console.log(data);
//   });
// });
// for (let i of studentsData) {
//   for (let j of i) {
//     console.log(j);
//   }
// }
function flattenNestedArray(arr) {
  let flatArray = arr.reduce((val, cur) => {
    return val.concat(cur);
  }, []);
  return flatArray;
}

console.log(flattenNestedArray([[10, 20], [30], [40, 50, 60]]));
