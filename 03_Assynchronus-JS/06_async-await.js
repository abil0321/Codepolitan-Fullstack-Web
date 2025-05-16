//? Apa Bedanya Promise dan async? ---------------------
//* Promise:  Untuk membuat janji baru (misalnya, memulai proses asinkron seperti setTimeout, fetch, dll). Tetap gunakan new Promise  untuk membuat janji dari awal 
//* async:  Hanya untuk menunggu janji selesai dengan await (tidak bisa membuat janji dari awal). Jadi klo janjinya tidak selesai-selesai dia tidak akan bergerak. Gunakan async jika kamu menunggu janji dari fungsi lain, bukan membuat janji dari awal.

//? Bagaimana cara mengelola kondisi error dengan Async Await --------------------------
// todo: promise function ==============
//! Promise function tidak sepenuhnya dapat di ubah menjadi Async. Fungsi async tidak bisa menggantikan new Promise(). async function tidak tahu cara "menunggu" setTimeout dan resolve/reject tanpa Promise. Jadi, kalau butuh delay/timeout, tetap harus pakai new Promise()
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay})`);
      }
    }, delay);
  });
};

// todo: async await dengan error handling ===============
//* dalam error handling async await harus menggunakan try catch karena akan mengakibatkan blocker. Menggunakan await tidak bisa langsung saja mengeksekusi perintah selanjutnya/perintah lain seperti reject. 
//* Jika tidak menggunakan try catch, maka error yang terjadi di dalam async function tidak akan terdeteksi dan tidak bisa di tangkap oleh promise.
async function requestHandler() {
  try {
    let result = await requestPromise("movie.com");
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}
requestHandler();



