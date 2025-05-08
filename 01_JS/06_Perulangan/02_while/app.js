//TODO: while iteration
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++; // increment
// }

//todo: sample while iteration
// const pass = 'Pass123';
// let login = prompt('Enter password');
// while (login !== pass) {
//   login = prompt('Password salah, coba lagi');
// }
// alert('Congrats! You have successfully logged in')

//TODO: membuat game tebak-tebakan angka
let maximum = parseInt(prompt("Masukkan nilai maksimum"));
while (!maximum) {
  maximum = parseInt(prompt("Nilai maksimum harus diisi"));
}

// todo: rumus tebak angka
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Masukkan nilai tebakan"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Tebakan terlalu besar, coba lagi"));
  } else {
    guess = parseInt(prompt("Tebakan terlalu kecil, coba lagi"));
  }
}

alert(`Selamat! Anda berhasil menebak angka dalam ${attempts} kali`);