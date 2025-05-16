//? Apa Bedanya Promise dan async? ---------------------
//* Promise: Untuk membuat janji baru (misalnya, memulai proses asinkron seperti setTimeout, fetch, dll). Tetap gunakan new Promise  untuk membuat janji dari awal 
//* async: Hanya untuk menunggu janji selesai dengan await (tidak bisa membuat janji dari awal). Jadi klo janjinya tidak selesai-selesai dia tidak akan bergerak. Gunakan async jika kamu menunggu janji dari fungsi lain , bukan membuat janji dari awal.
//! NOTE -  async tidak bisa menjalankan setTimeout() didalam fungsinya!

//? Bagaimana cara membuat fungsi async - Penjelasan awal tentang fungsi async -----------------------
//* Fungsi yang ditambahkan async akan otomatis menjadi promise secara instant. Async ini akan otomatis menjalankan resolve ketika dia memiliki output data. Jika ada object throw error didalam function, maka otomatis akan menjalankan bagian 'reject'.
// todo: membuat fungsi async ==================
async function test() {}

// todo: membuat contoh sederhana dari implementasi async =====================
const hello = async () => {
  //! FIXME: implementasi pada reject =============
  throw "maaf ga kenal";
  // throw(() => {
  //   'Maaf ga kenal';
  // })

  //* TODO: implementasi pada resolve ==============
  return "Hello World";
  // return () => {
  //   'Hello world'
  // }

  // todo - notes: yang diatas yang eksekusi, karena keduanya tidak bisa di eksekusi bersamaan
};

hello()
  .then((res) => { //* Mengeksekusi return =================
    console.log("Response: ", res);
  })
  .catch((err) => { //! Mengeksekusi throw ===================
    console.log("Error: ", err);
  });
