// TODO: For of
// const fruits = ['apple', 'banana', 'orange', 'mango', 'coconut'];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

//todo: nested for of, nested array
const studentRow = [
  ["Olivia", "Liam", "Emma", "Noah"],
  ["Oliver", "Lucas", "Ava", "William"],
  ["Isabella", "Mason", "Sophia", "James"],
  ["Emily", "James", "Amelia", "Benjamin"],
];

for (let row of studentRow) {
  console.log("Names in this row:");
  for (let name of row) {
    console.log(`     name: ${name}`);
  }
}

// todo: menghitung rata-rata
// const studentScore = {
//   Olivia: 20,
//   Liam: 13,
//   Emma: 40,
//   Oliver: 18,
//   Lucas: 32,
//   Ava: 10,
//   Isabella: 11,
//   Emily: 21,
//   James: 14,
//   William: 22,
// };

// let total = 0;
// let scores = Object.values(studentScore);
// for (const score of scores) {
//   total += score
// }
// console.log(`Total nilai siswa adalah ${total/scores.length}`);