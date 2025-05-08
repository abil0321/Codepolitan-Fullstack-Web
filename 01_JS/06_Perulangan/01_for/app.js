// todo: for loops
// for (let i = 0; i < 10; i++) {
//   console.log('saya ada didalam loops');
//   console.log(i);  
// }

// for (let i = 0; i < 20; i+= 2) {
//   console.log(i);
// }

// for (let i = 10; i < 100000; i*= 10) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// ! careful with infinite loops (logically infinite)
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// todo: array iteration with for loops
// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra']

// for (let i = 0; i < animals.length; i++) {
//   console.log(i+1 , animals[i]);
// }

//todo: nested loops
// let pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`     ${pilihan[j]}. Pilihan Jawaban ${pilihan[j]}`);
//   }
// }

//todo: nested loops, nested array iteration
const studentRow = [
  ["Olivia", "Liam", "Emma", "Noah"],
  ["Oliver", "Lucas", "Ava", "William"],
  ["Isabella", "Mason", "Sophia", "James"],
  ["Emily", "James", "Amelia", "Benjamin"],
];

for (let i = 0; i < studentRow.length; i++) {
  const row = studentRow[i];
  console.log(`Row Seat ${i + 1}: `);
  for (let j = 0; j < row.length; j++) {
    console.log(`   Siswa: ${row[j]}`);
  }
}