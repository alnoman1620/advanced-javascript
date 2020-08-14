const student = [
  { id: 21, name: "robin" },
  { id: 35, name: "bruce" },
  { id: 55, name: "alfred" },
];

// const result = [];
// for (let i = 0; i < student.length; i++) {
//   const element = student[i];
//   const name = element.name;
//   result.push(name);
// }
// console.log(result);

// using map
const name = student.map((s) => s.name);
const id = student.map((s) => s.id);
const bigger = student.filter((s) => s.id > 21);
console.log(bigger);
