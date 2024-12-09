// let student = {
//   firstname: "Brian",
//   age: 19,
//   tutor: "Wambua",
//   active: true,
//   subjects: {
//     math: 70,
//     english: 90,
//   },
//   mantra: function () {
//     return "I love coding!";
//   },
// };

// dot notation
// console.log(student.name);
// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student.tutor);
// console.log(student);
// console.log(
//   `${student.name} scored ${student.subjects.math}% in Math and ${student.subjects.english}% in literature`,
// );
// const dog = {
//   name: "Rocky",
// };
//
// console.log(dog.name);
// student.name = "Kevin";
// console.log(student["name"]);
// student.subjects.math = 73;
// console.log(student.subjects.math);
// student.lastname = "Otieno";

// console.log(
//   `${student.firstname} ${student.lastname} is currently enrolled in our school`,
// );
// console.log(`${student.firstname} is ${student.age} years old`);
// delete student.age;
// console.log(`${student.firstname} is ${student.age} years old`);
// console.log(`${student.firstname}'s mantra is ${student.mantra()}`);
// const student = {
//   name: "John",
//   age: 20,
//
//   marks: {
//     science: 70,
//     math: 75,
//   },
// };
//
// console.log(student["marks"]["science"]);
// console.log(student.marks.math);
// let student = Object.create({ math: 70 });
// console.log(student.math);
// Object.create()
// Object.assign()
// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//
//   get() {
//     return this.name;
//   }
// }
//
// const stud1 = new Student("mark");
// console.log(stud1.get());
const createFlashCard = (question, answer) => {
  return { Question: question, Answer: answer };
};

console.log(
  createFlashCard(
    (question = "What is the capital of France?"),
    (answer = "Paris"),
  ),
);
