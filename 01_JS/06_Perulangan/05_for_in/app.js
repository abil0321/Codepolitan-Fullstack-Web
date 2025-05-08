// TODO: for...in loop ----------------------------------------------------------------
const studentScore = {
  Olivia: 20,
  Liam: 13,
  Emma: 40,
  Oliver: 18,
  Lucas: 32,
  Ava: 10,
  Isabella: 11,
  Emily: 21,
  James: 14,
  William: 22,
};

for (const student in studentScore) {
  // * student merupakan key properties dari studentScore
  // console.log(`Siswa atas nama ${student}, memiliki nilai: ${studentScore['Olivia']}`);

  // todo: looping data student dan score nya
  console.log(`Siswa atas nama ${student}, memiliki nilai: ${studentScore[student]}`);
}
