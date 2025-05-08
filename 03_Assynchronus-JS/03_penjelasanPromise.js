//? Bagaimana cara membuat Promise - Penjelasan tentang Promise ----------------------------
// todo: 1. membuat promise
const contohPromise = () => {
  return new Promise((resolve, reject) => {
    //* jika berhasil maka kita akan jalankan resolve ============
    resolve('berhasil');
    // resolve(() => {
    //   console.log("berhasil");
    //   "berhasil"; //* jika ingin melakukan return
    // });

    //! jika gagal maka kita akan jalankan reject ============
    reject('gagal');
    // reject(() => {
    //   console.log("gagal");
    //   "gagal"; //* return
    // });
  });
};

const req = contohPromise();
console.log(req);

// todo: 2. membuat promise
const delayedColorChange = (color, delay) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
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