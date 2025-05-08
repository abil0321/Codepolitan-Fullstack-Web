//? Bagaimana cara membuat default value? --------------------------------------
// todo: 1 ============
function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi) + 1;
}
console.log(lemparDadu());

// todo: 2.1 ============
function sapa1(name = "user", msg = "selamat bekerja") {
  //* Jika kedua parameter tidak diisi saat pemanggilan fungsi, nilai default akan digunakan
  console.log(`${name} ${msg}`);
}

// todo: 2.2 ============
function sapa2(name = "user", msg) {
  //! Jika 'msg' tidak diisi saat pemanggilan fungsi, nilainya akan menjadi undefined
  console.log(`${name} ${msg}`);
}

// todo: 2.3 ============
function sapa3(name, msg = "selemat bekerja") {
  //! menampilkan name (undefined jika tidak diisi) dan msg (dengan default 'selemat bekerja' jika tidak diisi
  console.log(`${name} ${msg}`);
}

// todo: 2.4 ============
function sapa4(msg = "selemat bekerja", name) {
  //! Jika parameter diisi dengan 1 pemanggilan parameter, maka nilainya akan akan mengisi msg
  console.log(`${name} ${msg}`);
}

console.log(sapa4("aim")); //! 'undefined aim'
console.log(sapa4()); //* 'undefined selamat bekerja'
console.log(sapa4("selamat bekerja", "aim")); //* 'aim   selamat bekerja'

// *note: pastikan parameter yang akan di isi pertama terletak di posisi pertama!

//! KONSEP SPREAD OPERATOR (...)
/* Spread operator adalah fitur ES6 yang memungkinkan kita "membongkar" elemen array
   atau properti objek menjadi elemen-elemen individual. Bayangkan seperti membuka 
   kotak berisi barang dan mengeluarkan semua isinya satu per satu. */

//? BAGIAN 1: SPREAD OPERATOR PADA ARRAY =====================
// Mendefinisikan array awal untuk eksperimen
const angka = [1, 2, 3, 4, 5];
const nama = ["alex", "bimo", "cici", "delila"];

// todo: Menggabungkan array dengan nilai tambahan ============
// [...angka] = membongkar array angka menjadi 1,2,3,4,5
// kemudian menambahkan 0, 'a', 'b' di belakangnya
const campuran = [...angka, 0, "a", "b"]; //* spread operator - array "...angka"
console.log(campuran); // Output: [1,2,3,4,5,0,'a','b']
console.log(angka); // Array asli tetap tidak berubah: [1,2,3,4,5]

// todo: Menggabungkan dua array menjadi satu ============
// Urutan spread operator menentukan urutan hasil akhir
const campuran1 = [...angka, ...nama]; //* spread operator - array "...angka, ...nama"
console.log(campuran1); // [1,2,3,4,5,'alex','bimo','cici','delila']

const campuran2 = [...nama, ...angka]; //* spread operator - array "...nama, ...angka"
console.log(campuran2); // ['alex','bimo','cici','delila',1,2,3,4,5]

//? BAGIAN 2: SPREAD OPERATOR PADA OBJECT =====================
// Mendefinisikan object awal
const user = {
  name: "john",
  email: "john@gmail.com",
};

/* Membuat object baru dengan menggabungkan properti object lama
   dan menambahkan properti baru. Mirip seperti "meng-copy" isi
   object user dan menambahkan properti umur dan kerjaan */
const gabungUser = { ...user, umur: 20, kerjaan: "turu" }; //* spread operator - object "...user"
console.log(gabungUser); // Output: {name: 'john', email: 'john@gmail.com', umur: 20, kerjaan: 'turu'}

// Object credential untuk digabungkan
const credential = {
  password: "password",
  token: "alsdkfjlsadfjkhgkashf",
};

/* Menggabungkan dua object menjadi satu object baru
   Jika ada properti yang sama, nilai dari object yang terakhir
   akan menimpa nilai dari object sebelumnya */
const userBaru = { ...user, ...credential }; //* spread operator - object "...user, ...credential"
console.log(userBaru); // Output: {name: 'john', email: 'john@gmail.com', password: 'password', token: 'alsdkfjlsadfjkhgkashf'}

/* CATATAN PENTING:
   1. Spread operator membuat copy baru (shallow copy)
   2. Object/array asli tidak akan berubah
   3. Sangat berguna untuk immutable programming
   4. Sering digunakan dalam React untuk state management */


//? BAGIAN 3: SPREAD OPERATOR - REST PARAM =====================

// todo: 1 =====================
const sumAll = (...nums) => {
  return nums.reduce((total, el) => total + el)
}
console.log(sumAll(1,2,3,4,5,6,)); //* 21

// todo: 2 =======================
const pemain = ['alex', 'bimo', 'cici', 'delia', 'felix', 'jamal']
const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali emas diraih oleh: ${gold}`); //* 'Medali emas diraih oleh: alex'
  console.log(`Medali silver diraih oleh: ${silver}`); //* 'Medali silver diraih oleh: bimo'
  console.log(`Medali bronze diraih oleh: ${bronze}`);
  console.log(`Peserta lainnya: ${sisa}`); //* 'Peserta lainnya: delia,felix,jamal'
}
pemenang(...pemain); //* spread operator - rest param

//? Bagaimana cara membongkar elemen array ke masing-masing variable dengan mudah - destructing
// todo: destructing array ===================
const [gold, silver, bronze, ...peserta] = pemain;
console.log(gold); //* 'alex'
console.log(silver); //* 'bimo'
console.log(peserta); //* [ 'delia', 'felix', 'jamal' ]

// todo: destructing object =======================
const {name: nama1, email, phone = '20398203429048',...sisa} = gabungUser //* yang dipanggil di dalam destruction harus sama dengan apa yang ada di dalam object  karena dia memiliki identitas/nama pada item nya (berlaku juga untuk array jika ada identitas nya). Biasa di buatkan alias "name: nama1" jika ingin menggunakan panggilan lain. Kita juga bisa menambahkan property baru "phone = '20398203429048'"
console.log(nama1); //* 'john'
console.log(email);
console.log(phone); //* '20398203429048'
console.log(sisa); //* { umur: 20, kerjaan: 'turu' }

// todo: destructing untuk parameter pada function ====================
//* menggunakan object ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const userAndUmur = ({name, umur}) => {
  return `${name} - ${umur}`
}
console.log(userAndUmur(gabungUser)); //* 'john - 20'

//* menggunakan object yang ada di dalam array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

const anime = animes.map(({title, rate, year}) => {
  return `${title} (${year}) rating ${rate}`
})
console.log(anime) //* ['Attact on Titan (2013) rating 90', 'One Piece (1999) rating 89', 'Bleach (2004) rating 82', 'Hunter x Hunter (2011) rating 88', 'Naruto (2002) rating undefined']
