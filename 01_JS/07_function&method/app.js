// let lemparDadu = console.log(Math.floor(Math.random() * 6) + 1);
function lemparDadu() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

//? Bagaimana cara mendefinisaan function dan memanggilnya? ----------------------
// todo: Define function
function nyanyi() {
  console.log("Cek ...");
  console.log("Do re mi fa so la ti do");
}
// todo: Call function
nyanyi();

//? Bagaimana cara membuat Argument dan Parameter -----------------------------
// todo: membuat/menginisialisasi parameter di fungsi
function greet(parameter) {
  console.log(`hi, ${parameter}`);
}
// todo: membuat/menginisialisasi argument di objec fungsi
greet("argument");

//? Bagaimana cara membuat argumen dan parameter dengan 2 nilai -------------------------------------
function jumlahkan(a, b) {
  const hasil = a + b;
  console.log(hasil);
}

//? Return dalam function dan kegunaannya ------------------------------------------------------
function kali(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Input harus number";
  }
  return a * b;
}

//? Scope dalam function dan kegunaannya ------------------------------------------------------
const programming = "Javascript";
function sayHello() {
  const programming = "Python";
  console.log(programming);
}
console.log(programming);
sayHello();

//? Block scope dan kegunaannya ------------------------------------------------------
let tinggi = 8;
if (tinggi > 5) {
  // let lebar = 10;
  var lebar = 10;

  // console.log(lebar);
}
console.log("Lebar: ", lebar);

for (let index = 0; index < 10; index++) {
  // const indexNum = index;
  var indexNum = index;
  console.log(indexNum);
}
console.log("indexNum:", indexNum);

//! hindari menggunakan var: variabel yang dideklarasikan dengan var dapat diakses di luar blok scope, jadi seperti melakukan up lever pada variablenya menjadi globl. membuat scopenya menjadi lebih luas dari yang seharusnya.

//? Lexical scope dan kegunaannya ------------------------------------------------------
function lamarKerja() {
  const jabatan = "Programmer";

  function lebihDalam() {
    function orangDalam() {
      const kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
      console.log(kenalan);
    }
    orangDalam();
  }
  lebihDalam();
}

//? Function expression dan kegunaannya ------------------------------------------------------
const PerpangkatanBilangan = function (nilai, pembanding) {
  return nilai * pembanding;
};

PerpangkatanBilangan(2, 2);

//? Function sebagai argument ------------------------------------------------------

function duakali(func) {
  func();
  func();
}

function randomAngka() {
  // console.log("Hello");
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(hasil);
}

duakali(randomAngka);

//? Function sebagai return value ------------------------------------------------------
function hasilnyaAdalahFunction() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Selamat, angkanya lebih besar dari 0.5", rand);
    };
  } else {
    return function () {
      console.log("Maaf, angkanya lebih kecil dari 0.5", rand);
    };
  }
}
const hasilReturnFunction = hasilnyaAdalahFunction();

//? Definisi dari method ------------------------------------------------------
function myFun() {
  //todo: function biasa
  console.log("Hi");
  return "Hello";
}

const myMath = {
  //todo: object method
  tambah: function (a, b) {
    //todo: method
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

console.log(myFun());
console.log(myMath.tambah(1, 2));

//? this  dalam object method ------------------------------------------------------
const saya = {
  nama: "abil",
  hobi: "mancing keributan",
  kenalan: function () {
    console.log(`Halo, nama saya ${this.nama}, hobi saya ${this.hobi}`);
  },
};

saya.kenalan();

//? try catch adalah penyelamat ------------------------------------------------------
//* Contoh 1
try {
  //todo: jika kondisi yang dilkukan benar, maka akan menjalankan kode yang ada di dalam try.

  // saya.kenalan();
  saya1.kenalan(); //! saya1 tidak ada
} catch {
  //todo: jika kondisi yang dilakukan salah, maka akan menjalankan kode yang ada di dalam catch tanpa memberhentikan/melakukan break pada program.

  console.log("error guys!");
}

// saya1.kenalan(); //! ini bakalan error karena saya1 tidak ada

//* Contoh 2
function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    //* error adalah variabel yang otomatis dibuat oleh javascript ketika terjadi error dan akan menampilkan pesan error yang ada di dalamnya.

    console.log(error);
    console.log("Silahkan masukkan tipe data string pada argumen teriak");
  }
}
teriak("hello");
teriak(123);
