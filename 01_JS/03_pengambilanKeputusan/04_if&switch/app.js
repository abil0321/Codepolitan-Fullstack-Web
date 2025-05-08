// alert(1+1);
// console.log('hello world');

// TODO: Logika if ----------------------------------------------------
// let angka = Math.random();
// console.log(angka);
// if (angka >= 0.5){
//   console.log('Angka lebih besar dari 0.5');
// }
// if (angka <= 0.5) {
//     console.log('Angka lebih kecil dari 0.5');
// }

// todo: Logika else if
// const iniHari = 'selasa';
// if (iniHari === 'senin') {
//     console.log('Selamat Bekerja kawan!');
// } else if (iniHari === 'selasa') {
//     console.log('Semoga jangan cepat berlalu!');
// }

// const nilai = 60;
// if (nilai < 100) {
//     console.log('Nilai anda A');
// } else if (nilai < 80) {
//     console.log('Nilai anda B');
// } else if (nilai < 70) {
//     console.log('Nilai anda C');
// }

// todo: Logika else
// const Hari = prompt('Masukkan hari ini: ');
// if (Hari === 'senin') {
//     console.log('Selamat Bekerja kawan!');
// } else if (Hari === 'sabtu') {
//     console.log('Semoga jangan cepat berlalu!');
// }else {
//     console.log('Yah Biasa aja!');
// }

// todo: Logika nested if
// const password = prompt("Masukkan password: ");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password anda valid!");
//   } else {
//     console.log("Password tidak boleh mengandung spasi!");
//   }
// } else {
//   console.log("Password harus lebih dari 6 karakter!");
// }

// todo: operator AND
// const password = prompt("Masukkan password: ");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password anda valid!");
// } else {
//   console.log("Password tidak memenuhi syarat!");
// }

// todo: operator OR
// const role = prompt("Masukkan role: ");
// if (role === "admin" || role === "spv") {
//   console.log("Boleh mengaksesnya!");
// }else {
//   console.log("Akses ditolak!");
// }

// todo: operator NOT
// const role = prompt("Masukkan role: ");
// if (role !== "admin") {
//   console.log("Akses ditolak!");
// }else {
//   console.log("Boleh mengaksesnya!");
// }

// TODO: switch case ----------------------------------------------------------------
const balonku = prompt("Masukkan warna balon: ");
switch (balonku) {
  case "merah":
    console.log("Balonku warna merah!");
    break;
  case "hijau":
    console.log("Balonku warna hijau, door!");
    break;
  default:
    console.log("Bukan balon saya");
}
