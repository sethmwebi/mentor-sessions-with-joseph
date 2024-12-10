// function addProperty(obj, name, value) {
//  const newObj = { ...obj, [name]: value };
//   return newObj;
// }
//
// let president = {
//   name: "donald",
// };
// console.log(addProperty(president, "age", 78));
// console.log(addProperty(president, "wife", "Melania"));
// function updateAge(obj) {
//   const newObj = { ...obj, age: obj.age + 1 };
//   return newObj;
// }
//
// let pres = { age: 78 };
//
// console.log(updateAge(pres));

// let book = {
//   title: "Things Fall Apart",
//   author: "Chinua Achebe",
//   pages: 224,
//   publisher: "Longhorn",
// };

// if (book.hasOwnProperty("publisher")) {
//   console.log(book["publisher"]);
// } else {
//   console.log("No publisher in the book object");
// }
// function removeProperty(obj, name) {
//   if (obj.hasOwnProperty(name)) {
//     delete obj[name];
//     return obj;
//   } else {
//     return `Property ${name} does not exist in this object`;
//   }
// }
//
// console.log(removeProperty(book, "chapters"));
// const student = {
//   name: "Brian",
//   grade: "A+",
//   subject: "Math",
//   tutor: "wambua",
// };

// console.log(Object.entries(student));
// for (property in Object.entries(student)) {
//   console.log(student[property]);
// }
// console.log(Object.keys(student));
// console.log(Object.values(student));

// function countProperties(obj) {
//   return Object.entries(obj).length;
// }
//
// console.log(countProperties(student));
// const library = [
//   { title: "48 Laws of Power", author: "Robert Greene" },
//   { title: "Antifragile", author: "Nassim Taleb" },
//   { title: "Things Fall Apart", author: "Chinua Achebe" },
// ];
//
// console.log(library[2].title);

const student = {
  name: "Brian",
  age: 20,
};

const grades = {
  name: "Brian",
  math: "A+",
  age: 21,
};

function mergeProperties(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeProperties(student, grades));
