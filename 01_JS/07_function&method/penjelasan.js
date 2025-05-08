// Fungsi sederhana untuk mensimulasikan lemparan dadu (menghasilkan angka acak 1-6)
function lemparDadu() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

//? Bagaimana cara mendefinisaan function dan memanggilnya? ----------------------
// todo: Define function (Mendefinisikan fungsi)
// Fungsi adalah blok kode yang dapat dipanggil berulang kali
function nyanyi() {
  console.log("Cek ..."); // Output pertama saat fungsi dipanggil
  console.log("Do re mi fa so la ti do"); // Output kedua saat fungsi dipanggil
}
// todo: Call function (Memanggil fungsi)
nyanyi(); // Memanggil fungsi nyanyi() untuk mengeksekusi kode di dalamnya

//? Bagaimana cara membuat Argument dan Parameter -----------------------------
// todo: membuat/menginisialisasi parameter di fungsi
// Parameter adalah variabel yang menerima nilai saat fungsi dipanggil
function greet(parameter) {
  console.log(`hi, ${parameter}`); // Menggunakan parameter dalam template string
}
// todo: membuat/menginisialisasi argument di objec fungsi
// Argument adalah nilai aktual yang dikirim ke fungsi saat dipanggil
greet("argument"); // "argument" adalah nilai yang dikirim ke parameter

//? Bagaimana cara membuat argumen dan parameter dengan 2 nilai -------------------------------------
// Fungsi dapat menerima lebih dari satu parameter
function jumlahkan(a, b) {
  const hasil = a + b; // Melakukan operasi dengan dua parameter
  console.log(hasil);
}

//? Return dalam function dan kegunaannya ------------------------------------------------------
// Return digunakan untuk mengembalikan nilai dari fungsi
// Return juga menghentikan eksekusi fungsi (keluar dari fungsi)
function kali(a, b) {
  // Validasi tipe data input terlebih dahulu
  if (typeof a !== "number" || typeof b !== "number") {
    return "Input harus number"; // Return awal jika kondisi terpenuhi
  }
  return a * b; // Return nilai hasil perkalian jika input valid
}

//? Scope dalam function dan kegunaannya ------------------------------------------------------
// Scope menentukan di mana variabel dapat diakses
const programming = "Javascript"; // Variabel global (dapat diakses di mana saja)
function sayHello() {
  const programming = "Python"; // Variabel lokal (hanya diakses dalam fungsi)
  console.log(programming); // Akan menampilkan "Python" (variabel lokal)
}
console.log(programming); // Akan menampilkan "Javascript" (variabel global)
sayHello(); // Memanggil fungsi yang akan menampilkan "Python"

//? Block scope dan kegunaannya ------------------------------------------------------
let tinggi = 8;
if (tinggi > 5) {
  // let lebar = 10; // Jika menggunakan let, variabel hanya tersedia dalam blok if
  var lebar = 10; // Dengan var, variabel tersedia di luar blok (function scope)
  
  // console.log(lebar);
}
console.log("Lebar: ", lebar); // Dapat mengakses lebar karena dideklarasikan dengan var

for (let index = 0; index < 10; index++) {
  // const indexNum = index; // Jika menggunakan const, variabel hanya tersedia dalam loop
  var indexNum = index; // Dengan var, variabel tersedia di luar loop
  console.log(indexNum);
}
console.log("indexNum:", indexNum); // Dapat mengakses indexNum karena dideklarasikan dengan var

//! hindari menggunakan var: variabel yang dideklarasikan dengan var dapat diakses di luar blok scope, jadi seperti melakukan up lever pada variablenya menjadi globl. membuat scopenya menjadi lebih luas dari yang seharusnya.

//? Lexical scope dan kegunaannya ------------------------------------------------------
// Lexical scope: fungsi dalam dapat mengakses variabel dari fungsi luar
function lamarKerja() {
  const jabatan = "Programmer"; // Variabel di scope luar

  function lebihDalam() {
    function orangDalam() {
      // Fungsi terdalam dapat mengakses variabel dari semua scope di atasnya
      const kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
      console.log(kenalan);
    }
    orangDalam(); // Memanggil fungsi terdalam
  }
  lebihDalam(); // Memanggil fungsi tengah
}

//? Function expression dan kegunaannya ------------------------------------------------------
// Function expression: menyimpan fungsi dalam variabel
const PerpangkatanBilangan = function (nilai, pembanding) {
  return nilai * pembanding;
};

PerpangkatanBilangan(2, 2); // Memanggil fungsi yang disimpan dalam variabel

//? Function sebagai argument ------------------------------------------------------
// Fungsi dapat dikirim sebagai argument ke fungsi lain (callback)
function duakali(func) {
  func(); // Memanggil fungsi yang dikirim sebagai argument
  func(); // Memanggil lagi fungsi tersebut
}

function randomAngka() {
  // console.log("Hello");
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(hasil);
}

duakali(randomAngka); // Mengirim fungsi randomAngka sebagai argument

//? Function sebagai return value ------------------------------------------------------
// Fungsi dapat mengembalikan fungsi lain (higher-order function)
function hasilnyaAdalahFunction() {
  const rand = Math.random();
  if (rand > 0.5) {
    // Mengembalikan fungsi anonim jika kondisi terpenuhi
    return function () {
      console.log("Selamat, angkanya lebih besar dari 0.5", rand);
    };
  } else {
    // Mengembalikan fungsi anonim lain jika kondisi tidak terpenuhi
    return function () {
      console.log("Maaf, angkanya lebih kecil dari 0.5", rand);
    };
  }
}
const hasilReturnFunction = hasilnyaAdalahFunction(); // Menyimpan fungsi yang dikembalikan
// hasilReturnFunction(); // Bisa dipanggil untuk mengeksekusi fungsi yang dikembalikan

//? Definisi dari method ------------------------------------------------------
function myFun() {
  //todo: function biasa (standalone function)
  console.log("Hi");
  return "Hello";
}

const myMath = {
  //todo: object method - fungsi yang menjadi properti dari objek
  tambah: function (a, b) {
    //todo: method - fungsi yang terikat pada objek
    return a + b;
  },
  kali: function (a, b) {
    return a * b;
  },
  bagi: function (a, b) {
    return a / b;
  },
  kurang: function (a, b) {
    return a - b;
  },
};

console.log(myFun()); // Memanggil fungsi biasa
console.log(myMath.tambah(1, 2)); // Memanggil method dari objek myMath

//? this dalam object method ------------------------------------------------------
// this merujuk pada objek yang sedang mengeksekusi method
const saya = {
  nama: "abil", // Properti objek
  hobi: "mancing keributan", // Properti objek
  kenalan: function () {
    // this.nama merujuk ke properti nama dari objek saya
    console.log(`Halo, nama saya ${this.nama}, hobi saya ${this.hobi}`);
  },
};

saya.kenalan(); // Memanggil method kenalan dari objek saya

//? try catch adalah penyelamat ------------------------------------------------------
//* Contoh 1
try {
  //todo: jika kode dalam blok try berjalan normal, catch tidak akan dieksekusi
  
  // saya.kenalan(); // Ini akan berjalan normal
  saya1.kenalan(); //! Error: saya1 tidak terdefinisi
} catch {
  //todo: jika terjadi error dalam blok try, kode dalam catch akan dieksekusi
  //todo: program tetap berjalan dan tidak berhenti karena error ditangkap
  
  console.log("error guys!");
}

// saya1.kenalan(); //! Ini akan menyebabkan error dan menghentikan program karena tidak dalam try-catch

//* Contoh 2
function teriak(msg) {
  try {
    console.log(msg.toUpperCase()); // Mencoba mengubah msg menjadi huruf besar
  } catch (error) {
    //* error adalah objek yang berisi informasi tentang error yang terjadi
    
    console.log(error); // Menampilkan detail error
    console.log("Silahkan masukkan tipe data string pada argumen teriak");
  }
}
teriak("hello"); // Berjalan normal
teriak(123); // Akan error karena angka tidak memiliki method toUpperCase()
