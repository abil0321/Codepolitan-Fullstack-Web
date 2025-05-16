//? Bagaimana cara membuat Promise - Penjelasan tentang Promise ----------------------------
// todo: 1. membuat promise ======================
const contohPromise = () => {
  return new Promise((resolve, reject) => { //* ini promise nya !
    //* jika berhasil maka kita akan jalankan resolve ----------------
    resolve('berhasil');
    // resolve(() => {
    //   console.log("berhasil");
    //   "berhasil"; //* jika ingin melakukan dengan callback function
    // });

    //! jika gagal maka kita akan jalankan reject ============
    reject('gagal');
    // reject(() => {
    //   console.log("gagal");
    //   "gagal"; //* return, jika ingin melakukan dengan callback function
    // });
  });
};

const req = contohPromise();
console.log(req);

// todo: 2. membuat promise ====================
const delayedColorChange = (color, delay) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve(); //* selesai di sini dan akan dijalankan dengan delay-nya
    }, delay)
  })
}

delayedColorChange('red', 1000)
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('salmon', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('pink', 1000))
.then(() => delayedColorChange('black', 1000))