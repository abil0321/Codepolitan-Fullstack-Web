// TODO: foreach ----------------------------------------------------------------
// const fruits = ['apple', 'banana', 'orange', 'mango', 'coconut'];
// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// todo: nested foreach, nested array
const studentRow = [
  ["Olivia", "Liam", "Emma", "Noah"],
  ["Oliver", "Lucas", "Ava", "William"],
  ["Isabella", "Mason", "Sophia", "James"],
  ["Emily", "James", "Amelia", "Benjamin"],
];

studentRow.forEach(row => {
  console.log("Names in this row:");
  row.forEach(name => {
    console.log(`     name: ${name}`);
  });
});

