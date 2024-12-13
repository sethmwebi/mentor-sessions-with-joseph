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
// const createFlashCard = (question, answer) => {
//   return { Question: question, Answer: answer };
// };
//
// console.log(
//   createFlashCard(
//     (question = "What is the capital of France?"),
//     (answer = "Paris"),
//   ),
// );
// const dog = {
//   name: "Rocky",
//   bark: function () {
//     console.log("Woof!");
//   },
// };
//
// dog.bark();

// const president = {
//   name: "Donald Trump",
//   age: 78,
//
//   aboutPresident: function () {
//     console.log(`${this.name} is ${this.age} years old!`);
//   },
// };
//
// president.aboutPresident();

// const podcasters = {
//   name: "Joe Rogan",
// };
//
// podcasters.quote = function () {
//   return "hey now brown cow";
// };
//
// console.log(podcasters.quote());
// const podcasters = ["Joe Rogan", "Lex Fridman"];
// console.log(podcasters);
//
// const allPodcasters = podcasters.concat([
//   "Candance Owens",
//   "Patrick Bet David",
// ]);
// console.log(allPodcasters);
// const pi = 3.142569;
// console.log(pi.toFixed(2));
// const positions = [2, 6, 9, 3, 4];
// const arrangedPositions = positions.sort();
// console.log(arrangedPositions);
// console.log(Math.floor(Math.random() * 10) + 1);
// const firstname = "Vivek";
// const lastname = " Ramaswamy";
// const fullname = firstname.concat(lastname);
// console.log(fullname);

// function Person() {
//   this.name = "Elon";
//   this.age = 52;
// }
//
// const richestMan = new Person();
// const richestPerson = new Person();
// console.log(
//   `The Richest man in the world is ${richestMan.name} and he is ${richestMan.age} years old`,
// );
// console.log(
//   `The Richest man in the world is ${richestPerson.name} and he is ${richestPerson.age} years old`,
// );
// function RichestPerson(person_name, person_age, person_gender) {
//   this.name = person_name;
//   this.age = person_age;
//   this.gender = person_gender;
//
//   this.greet = function () {
//     return `Hi, I am ${this.gender} and my name is ${this.name}. Am now ${this.age} years old`;
//   };
// }
//
// let person1 = new RichestPerson("Elon", 52, "male");
// console.log(person1.greet());
// let person2 = new RichestPerson("Jeff", 63, "male");
// console.log(person2.greet());
// let person3 = new RichestPerson("Oprah", 60, "female");
// console.log(person3.greet());
// let person1 = new RichestPerson("Elon", 52, "male");
// let person2 = new RichestPerson("Elon", 52, "male");

// console.log(person1 === person2);
// let item1 = "seth";
// let item2 = "seth";
// console.log(item1 === item2);
// const name = "Joseph";
// console.log(name);
// class RichestPerson {
//   //  name;
//   // public age;
//   // public gender;
//   constructor(person_name, person_age, person_gender) {
//     this.name = person_name;
//     this.age = person_age;
//     this.gender = person_gender;
//   }
//
//   getName() {
//     return this.name;
//   }
//
//   getAge() {
//     return this.age;
//   }
//
//   getGender() {
//     return this.gender;
//   }
// }
//
// let person1 = new RichestPerson("Elon", 52, "male");
// console.log(
//   `Hi, I am ${person1.getGender()} and my name is ${person1.getName()}. Am now ${person1.getAge()} years old`,
// );
// const president = {
//   name: "Donald",
//
//   get getName() {
//     return this.name;
//   },
//
//   set changeName(newName) {
//     this.name = newName;
//   },
// };
//
// // console.log(president.name);
// // console.log(president.getName);
// president.changeName = "Obama";
// console.log(president.getName);

// const country = {
//   name: "North Korea",
// };
//
// Object.defineProperty(country, "getCountry", {
//   get: function () {
//     return this.name;
//   },
// });
//
// // console.log(country.getCountry);
// Object.defineProperty(country, "setCountry", {
//   set: function (newCountry) {
//     this.name = newCountry;
//   },
// });
//
// country.setCountry = "China";
// console.log(country.getCountry);

// function Country(continent) {
//   this.continent = continent;
// }
//
// Country.prototype.savage = "Genghis Khan";
//
// // const fact1 = new Country();
// const continent = new Country("Asia");
// console.log(continent.savage);
// function Car() {
//   console.log("Jeep");
// }
//
// Car.prototype.color = "Red";
//
// Car.prototype.drive = function () {
//   console.log(`Driving the car painted in ${this.color}...`);
// };
//
// Car.prototype.drive();
// function Car(model, year, name) {
//   this.year = year;
//   this.model = model;
//   this.name = name;
// }
//
// let c1 = new Car("Mustang", 1964, "kamala");
// let c2 = new Car("Corolla", 1966, "trump");
//
// Car.prototype.name = "Joe Rogan";
//
// Car.prototype.color = "Black";
//
// Car.prototype.drive = function () {
//   console.log(`Driving ${this.model}`);
// };
//
// // console.log(`${c1.model} is ${c1.color} in color`);
// // console.log(`${c2.model} is ${c2.color} in color`);
// // c1.drive();
// // c2.drive();
// console.log(c1.name);
function Car() {
  return "car";
}

Car.prototype.color = "Brown";

const c1 = new Car();
// console.log(c1.color);

Car.prototype.color = "black";

console.log(c1.color);
