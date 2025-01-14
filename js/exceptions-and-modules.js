// varx x = "mark"
//
// const hi = () => {
//   return "Jordan Peterson";
// };
//
// try {
//   console.log(hi());
// } catch (error) {
//   console.log(`Error: ${error.message}`);
// } finally {
//   console.log("I run anyways");
// }
// try {
//   setTimeout(() => {
//     hi();
//   }, 5000);
// } catch (error) {
//   console.log(error.message);
// }
// setTimeout(() => {
//   try {
//     throw new Error("error!!!");
//   } catch (error) {
//     console.log(error.message);
//   }
// }, 5000);
// number = 5;
// throw number / 0;
// const number = 45;
// try {
//   if (number > 50) {
//     console.log("success");
//   } else {
//     throw new Error("failed");
//   }
//   console.log("I reached here");
// } catch (error) {
//   if (number < 40) {
//     throw new Error("still too low a number");
//   } else {
//     console.log("Low but not too much");
//   }
// }
export function greeting() {
  console.log("hi");
}
