// ? Bagaimana cara melakukan foreach? -------------------------------------------------------------------
// todo: 1 ===================
const angka = [1, 2, 3, 4, 5, 6];

function print(element) {
  console.log(element);
}
angka.forEach(print);

// todo: 2 ===================
const animes = [
  {
    title: "Attact on Titan",
    rate: 90,
    year: 2013,
  },
  {
    title: "One Piece",
    rate: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rate: 82,
    year: 2004,
  },
  {
    title: "Hunter x Hunter",
    rate: 88,
    year: 2011,
  },
  {
    title: "Naruto",
    rete: 90,
    year: 2002,
  },
];

animes.forEach(function (anime) {
  console.log(`Title: ${anime.title} - Rate: ${anime.rate}/100`);
});

//? Bagaimana cara melakukan map -------------------------------------------------------------------
// todo: 1 ===================
const angkaDouble = angka.map(function (num) {
  return num * 2;
});

console.log(angka);
console.log(angkaDouble);

// todo: 2 ===================
const animeList = animes.map(function (anime) {
  return anime.title.toUpperCase();
});
console.log(animes);
console.log(animeList);

//? revolution function to arrow function -------------------------------------------------------------------
// todo: dasar fungsi ===================
//  function perpangkatan(x) {
//   return x * x;
// }
// const hasil = perpangkatan(5);

// todo: function expression ===================
// const hasil = function (x) {
//   return x * x;
// }
// console.log(hasil(5));

// todo: Arrow function ===================
const hasil = (x) => {
  return x * x;
};
console.log(hasil(5));

//* arrow function jika parameternya 1, jika lebih dari 1 atau tidak ada parameternya harus cantumkan tanda kurung "()"
const hasil1 = (y) => {
  return y + y;
};
console.log(hasil1(5));

//? Bagaimana cara melakukan implisit return dari function (ini akan arrow function) ----------------------------------------------------
//* implisit return hanya bisa digunakan jika isi functionnya hanya 1 baris !
// todo: dengan tanda kurung (gunakan tanda kurung jika kodingannya 1 barisnya agak panjang ataupun ribet) ===================
const random = () => Math.floor(Math.random * 1000);

// todo: tanpa tanda kurung (tidak usah gunakan tanda kurung jika program 1 barisnya sangat simple) ===================
const add = (a, b) => a + b;

//? Bagaimana Settimeout dan Setinterval bekerja, serta bagaimana caranya? ------------------------------------------------------------
//* Bagian ini menjelaskan tentang fungsi asinkron setTimeout dan setInterval
//* setTimeout digunakan untuk menjalankan kode setelah waktu tertentu (sekali)
//* setInterval digunakan untuk menjalankan kode secara berulang dengan interval waktu tertentu
// todo: settimeout ===================
console.log("Haloo ..."); // Pesan ini akan muncul pertama

// setTimeout menerima 2 parameter: fungsi callback dan waktu dalam milidetik (1000ms = 1 detik)
setTimeout(() => {
  console.log("masih disana gak?"); // Pesan ini akan muncul setelah 5 detik
}, 5000); // 5000ms = 5 detik

console.log("saya akan pergi"); // Pesan ini akan muncul kedua, tidak menunggu setTimeout

// CATATAN PENTING: JavaScript tidak menunggu setTimeout selesai
// Kode di luar setTimeout akan tetap dijalankan tanpa menunggu
//* notes: selain dari log yang didalam setTimeout akan berjalan langsung bersamaan ketika program di eksekusi

// todo: setinterval ===================
//* setInterval menjalankan fungsi berulang kali dengan interval waktu tertentu.
const interval = setInterval(() => {
  console.log(Math.random());
}, 2000); //* akan melakukan proses secara berulang-ulang setiap 2 detik

//! setinterval ini akan berjalan sampai dibuat berhenti dengan fungsi "clearInterval()". 
//* clearInterval digunakan untuk menghentikan interval yang sedang berjalan. Tanpa clearInterval, kode di dalam setInterval akan terus berjalan
clearInterval(interval);

//? Bagaimana cara melakukan filter pada array? ---------------------------------------------------------
//* filter() adalah method array yang membuat array baru berisi elemen-elemen yang memenuhi kondisi tertentu (lolos dari "penyaringan")
// todo: 1 ===================
const ganjil = angka.filter((n) => {
  return n % 2 === 1; //* Mengembalikan true jika n adalah ganjil (sisa bagi 1)
});
console.log(ganjil); //* [ 1, 3, 5 ]

// todo: 2 ===================
const animeBagus = animes.filter((anime) => anime.rate >= 85);
console.log(animeBagus); //* Menampilkan array berisi anime dengan rating >=85

//todo: 3 Method chaining - menggabungkan filter dan map ===================
//* filter() untuk menyaring anime rating tinggi, lalu map() untuk mengambil judulnya saja
const judulAnimeBagus = animes
  .filter((anime) => anime.rate >= 85) //* Filter anime rating tinggi
  .map((anime) => anime.title); //* Ambil judul dari hasil filter
console.log(judulAnimeBagus); // [ 'Attact on Titan', 'One Piece', 'Hunter x Hunter', 'Naruto' ]

//? Menentukan benar atau salah pada array dengan every() dan some() method----------------------------------------------------
// todo: method every() ==================
//* akan menjadi false jika 1 saja item array tidak memenuhi kriteria
const examScore = [80, 85, 79, 90, 93];
const isGraduate = examScore.every((score) => score >= 75);
console.log(isGraduate);

// todo: method some ========================
//* akan menjadi false jika semua item array tidak memenuhi kriteria
const isAnimeListNew = animes.some((anime) => anime.year >= 2010);
console.log(isAnimeListNew);

//? Mendapatkan 1 nilai sesuai dari sebuah array dengan reduce ------------------------------------------
//* reduce() adalah method array yang "mereduksi" array menjadi satu nilai tunggal. reduce() menerima callback dengan parameter: accumulator dan currentValue
// todo: 1 menambahkan setiap table =============================
const subtotal = [1500, 20000, 4000, 19000];
const total = subtotal.reduce((currentTotal, singleSubtotal) => {
  //* currentTotal adalah nilai yang terakumulasi dari iterasi sebelumnya
  //* singleSubtotal adalah nilai elemen array saat ini
  return currentTotal + singleSubtotal;
});
console.log(total); // 44500

// todo: 2 mendapatkan rate tertinggi ==============================
const bestAnime = animes.reduce((bestAnime, currentAnime) => {
  console.log(bestAnime, currentAnime); //* Melihat proses perbandingan di setiap iterasi
  if (currentAnime.rate > bestAnime.rate) { //* Membandingkan rating anime saat ini dengan anime terbaik sejauh ini
    return currentAnime; //* Jika lebih tinggi, jadikan sebagai anime terbaik
  }
  return bestAnime; //* Jika tidak, pertahankan anime terbaik sebelumnya
});

console.log(bestAnime); //{ title: 'Naruto', rate: 91, year: 2002 }

//? Object this di dalam arrow function mengarah pada object Global Window? -------------------------------------------------
const person = {
  firstName: "John", // Property pertama dari object person
  lastName: "Doe",

  //* Arrow function tidak memiliki this sendiri, melainkan mengambil this dari konteks luar global (lexical scope)
  fullName: () => {
    //! Method menggunakan arrow function (⚠️ ini akan bermasalah)
    console.log(this); //! this di sini akan merujuk ke global object (Window di browser), bukan ke object person
    return `${this.firstName} ${this.lastName}`; //! Hasilnya akan undefined undefined karena this bukan merujuk ke person
  },
  //* Solusinya ✅: gunakan saja regular function (function () {}) makan itu akan membuatnya baik baik saja

  //* Function biasa memiliki this yang merujuk ke object yang memanggilnya
  panggilNanti: function () {
    //* Method menggunakan function biasa/regular function
    setTimeout(function () {
      //! Function global bawaan js seperti setTimeout dengan regular callback function didalamnya akan memiliki dampak yang sama seperti arrow function diatas (⚠️ ini akan bermasalah)
      console.log(this); //! this di sini akan merujuk ke global object (Window), bukan ke person
      console.log(this.firstName); //! Hasilnya akan undefined karena this bukan merujuk ke person
    });
  },
  //* Solusinya ✅: Menggunakan arrow function: setTimeout(() => { console.log(this.firstName); }) maka itu akan berjalan sesuai dengan yang di inginkan
};