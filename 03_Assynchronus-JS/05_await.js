//? Bagaimana cara membuat fungsi await - Penjelasan awal tentang fungsi await -----------------------
//* Fungsi "await" hanya bisa digunakan didalam fungsi dengan "async". "await" akan melakukan jeda pada proses selanjutnya dan menunggu promise/async yang dijalankan sebelumnya resolved.
// todo: 1. membuat promise
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// todo: melakukan await pada async function ========================
async function changeColor() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("salmon", 1000);
  await delayedColorChange("aqua", 1000);
  await delayedColorChange("pink", 1000);
  await delayedColorChange("black", 1000);
  return "All Done";
}

// todo: dipanggil menggunakan request  ====================
// changeColor().then((res) => {
//   // alert(res)
//   console.log(res);
// });

// todo: bisa juga melakukan chain method pada async function ===================
async function printRainbow() {
  await changeColor(); //* bisa menggunakan await dari function yang didalamnya ada await juga
  console.log('All Done dari printRainbow 😅👏');
}

printRainbow();
