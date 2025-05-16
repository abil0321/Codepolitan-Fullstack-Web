//? Bagaimana cara menindaklanjuti inputan atau perintah pengguna? - Belajar Keyboard Event dan Mengenal Object dalam Event -------------------------
// TODO: mengecek properti dari object yang dimiliki addEventListener ====================
document.querySelector("button").addEventListener("click", (e) => {
  //* SECTION - Mengecek isi dari addEventListener ini apa aja? (isinya object PointerEvent yang isinya banyak property dari button)
  //* Objectnya dapat diambil, termasuk apakah ini diinput/diaksikan melalui mouse atau keyboard!
  console.log(e);
});

// TODO: Belajar Keyboard Event - melakukan aksi pada input selector =====================
const input = document.querySelector("input");

//* SECTION - keydown digunakan untuk mendeteksi penekanan pada tombol di keyboard --------------------
// input.addEventListener('keydown', () => {
//   console.log('tombol ditekan !');
// })

//* SECTION - keyup digunakan untuk mendeteksi pelepasan tekanan pada tombol di keyboard ---------------------------
// input.addEventListener('keyup', () => {
//   console.log('tombol dilepaskan !');
// })

// TODO: mendapatkan object dari input keyboard =======================
input.addEventListener("keydown", (e) => {
  //* NOTE - mengecek property dan object dari event
  // console.log(e);

  //* NOTE - mendapatkan isi dari property object
  // console.log(e.key);
  // console.log(e.code);

  // TODO: implementasi Keyboard Event dalam program, dengan mengambil object dari code sebagai parameter ===============================
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol Panah Atas ditekan!");
      break;
    case "ArrowDown":
      console.log("Tombol Panah Bawah ditekan!");
      break;
    case "ArrowLeft":
      console.log("Tombol Panah Kiri ditekan!");
      break;
    case "ArrowRight":
      console.log("Tombol Panah Kanan ditekan!");
      break;

    default:
      console.log("tidak ada aksi!");
      break;
  }
});
